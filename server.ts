import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import express from 'express';
import type { Request, Response } from 'express';
import { NetSecDatabase } from './server/db.ts';

const PORT = Number(process.env.PORT) || 3000;
const isProduction = process.env.NODE_ENV === 'production';

const db = new NetSecDatabase();
const app = express();

app.use(express.json({ limit: '5mb' }));

// Health check
app.get('/api/health', (_req: Request, res: Response) => {
  res.json({ ok: true, storage: 'sqlite' });
});

// Get campaign progress and active session (if any)
app.get('/api/progress', (_req: Request, res: Response) => {
  const progress = db.getCampaignProgress();
  const activeSession = progress.activeSessionId ? db.getSession(progress.activeSessionId) : null;
  res.json({
    ...progress,
    activeSession,
  });
});

// Update campaign progress (completed missions + optional activeSessionId)
app.put('/api/progress', (req: Request, res: Response) => {
  const body = req.body as {
    completedMissionIds?: unknown;
    activeSessionId?: string | null;
  };

  if (!Array.isArray(body.completedMissionIds)) {
    res.status(400).json({ error: 'completedMissionIds must be an array of mission IDs.' });
    return;
  }

  const updated = db.updateCampaignProgress(
    body.completedMissionIds.filter((id): id is string => typeof id === 'string'),
    body.activeSessionId
  );
  res.json(updated);
});

// Clear active session pointer (start fresh while keeping saves & completed missions)
app.post('/api/progress/clear-active', (_req: Request, res: Response) => {
  db.setActiveSessionId(null);
  res.json(db.getCampaignProgress());
});

// Reset campaign progress (optionally keeping manual save slots)
app.post('/api/progress/reset', (req: Request, res: Response) => {
  const body = req.body as { keepSavedSessions?: boolean };
  const keepSavedSessions = body?.keepSavedSessions !== false;
  const reset = db.resetCampaignProgress(keepSavedSessions);
  res.json(reset);
});

// List all saved sessions
app.get('/api/sessions', (_req: Request, res: Response) => {
  res.json({ sessions: db.listSessions() });
});

// Get a specific saved session (with full simulation snapshot)
app.get('/api/sessions/:id', (req: Request, res: Response) => {
  const id = String(req.params.id);
  const session = db.getSession(id);
  if (!session) {
    res.status(404).json({ error: 'Saved session not found.' });
    return;
  }
  res.json({ session });
});

// Create or update a saved session
app.post('/api/sessions', (req: Request, res: Response) => {
  const body = req.body as {
    id?: string;
    name?: string;
    scenarioId?: string;
    scenarioTitle?: string;
    scenarioSequence?: number;
    objectivesPassed?: number;
    objectivesTotal?: number;
    isAutosave?: boolean;
    snapshot?: unknown;
    setActive?: boolean;
  };

  if (!body.scenarioId || !body.snapshot || typeof body.snapshot !== 'object') {
    res.status(400).json({ error: 'scenarioId and snapshot are required.' });
    return;
  }

  const id = typeof body.id === 'string' && body.id.trim() ? body.id.trim() : crypto.randomUUID();
  const isAutosave = Boolean(body.isAutosave) || id === 'autosave';
  const name =
    typeof body.name === 'string' && body.name.trim()
      ? body.name.trim()
      : isAutosave
        ? 'Auto-Save Checkpoint'
        : `Session ${new Date().toLocaleString()}`;

  const saved = db.upsertSession({
    id,
    name,
    scenarioId: body.scenarioId,
    scenarioTitle: typeof body.scenarioTitle === 'string' ? body.scenarioTitle : body.scenarioId,
    scenarioSequence: typeof body.scenarioSequence === 'number' ? body.scenarioSequence : 0,
    objectivesPassed: typeof body.objectivesPassed === 'number' ? body.objectivesPassed : 0,
    objectivesTotal: typeof body.objectivesTotal === 'number' ? body.objectivesTotal : 0,
    isAutosave,
    snapshot: body.snapshot,
    setActive: body.setActive !== false,
  });

  res.status(201).json({ session: saved });
});

// Rename a saved session or mark it active
app.patch('/api/sessions/:id', (req: Request, res: Response) => {
  const id = String(req.params.id);
  const body = req.body as { name?: string; setActive?: boolean };

  const existing = db.getSession(id);
  if (!existing) {
    res.status(404).json({ error: 'Saved session not found.' });
    return;
  }

  let updatedSummary = null;
  if (typeof body.name === 'string' && body.name.trim()) {
    updatedSummary = db.renameSession(id, body.name.trim());
  }
  if (body.setActive) {
    db.setActiveSessionId(id);
  }

  res.json({ session: updatedSummary || existing });
});

// Delete a saved session
app.delete('/api/sessions/:id', (req: Request, res: Response) => {
  const id = String(req.params.id);
  const deleted = db.deleteSession(id);
  if (!deleted) {
    res.status(404).json({ error: 'Saved session not found.' });
    return;
  }
  res.json({ ok: true });
});

async function startServer(): Promise<void> {
  if (!isProduction) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distDir = path.resolve(process.cwd(), 'dist');
    app.use(express.static(distDir));
    app.use((req: Request, res: Response) => {
      if (req.method !== 'GET' || req.path.startsWith('/api/')) {
        res.status(404).json({ error: 'Not found' });
        return;
      }
      const indexHtml = path.join(distDir, 'index.html');
      if (fs.existsSync(indexHtml)) {
        res.sendFile(indexHtml);
      } else {
        res.status(404).send('Build output not found. Run npm run build first.');
      }
    });
  }

  const server = app.listen(PORT, '0.0.0.0', () => {
    console.log(`NetSec 3D Simulator server listening on http://0.0.0.0:${PORT}`);
  });

  const shutdown = () => {
    server.close(() => {
      db.close();
      process.exit(0);
    });
  };
  process.on('SIGINT', shutdown);
  process.on('SIGTERM', shutdown);
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
