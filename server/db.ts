import fs from 'node:fs';
import { createRequire } from 'node:module';
import path from 'node:path';
import type { DatabaseSync as DatabaseSyncType } from 'node:sqlite';

const require = createRequire(import.meta.url);
const { DatabaseSync } = require('node:sqlite') as typeof import('node:sqlite');

export interface SavedSessionSummary {
  id: string;
  name: string;
  scenarioId: string;
  scenarioTitle: string;
  scenarioSequence: number;
  objectivesPassed: number;
  objectivesTotal: number;
  isAutosave: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface SavedSessionRecord extends SavedSessionSummary {
  snapshot: unknown;
}

export interface CampaignProgressRecord {
  completedMissionIds: string[];
  activeSessionId: string | null;
  updatedAt: string;
}

export interface UpsertSessionInput {
  id: string;
  name: string;
  scenarioId: string;
  scenarioTitle: string;
  scenarioSequence: number;
  objectivesPassed: number;
  objectivesTotal: number;
  isAutosave?: boolean;
  snapshot: unknown;
  setActive?: boolean;
}

function resolveDbPath(customPath?: string): string {
  if (customPath) {
    return customPath;
  }
  const envPath = process.env.NETSEC_DB_PATH?.trim();
  if (envPath) {
    return path.resolve(process.cwd(), envPath);
  }
  return path.resolve(process.cwd(), 'data', 'netsec.db');
}

function parseCompletedIds(raw: unknown): string[] {
  if (typeof raw !== 'string') return [];
  try {
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return Array.from(new Set(parsed.filter((item): item is string => typeof item === 'string')));
  } catch {
    return [];
  }
}

export class NetSecDatabase {
  private db: DatabaseSyncType;

  constructor(dbPath?: string) {
    const resolved = resolveDbPath(dbPath);
    if (resolved !== ':memory:') {
      fs.mkdirSync(path.dirname(resolved), { recursive: true });
    }
    this.db = new DatabaseSync(resolved);
    this.init();
  }

  private init(): void {
    this.db.exec(`
      PRAGMA journal_mode = WAL;
      PRAGMA foreign_keys = ON;

      CREATE TABLE IF NOT EXISTS campaign_progress (
        id INTEGER PRIMARY KEY CHECK (id = 1),
        completed_mission_ids TEXT NOT NULL DEFAULT '[]',
        active_session_id TEXT,
        updated_at TEXT NOT NULL
      );

      CREATE TABLE IF NOT EXISTS saved_sessions (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        scenario_id TEXT NOT NULL,
        scenario_title TEXT NOT NULL,
        scenario_sequence INTEGER NOT NULL,
        objectives_passed INTEGER NOT NULL DEFAULT 0,
        objectives_total INTEGER NOT NULL DEFAULT 0,
        is_autosave INTEGER NOT NULL DEFAULT 0,
        snapshot_json TEXT NOT NULL,
        created_at TEXT NOT NULL,
        updated_at TEXT NOT NULL
      );

      CREATE INDEX IF NOT EXISTS idx_saved_sessions_updated
        ON saved_sessions (is_autosave DESC, updated_at DESC);
    `);

    const existing = this.db.prepare('SELECT id FROM campaign_progress WHERE id = 1').get();
    if (!existing) {
      this.db
        .prepare(
          'INSERT INTO campaign_progress (id, completed_mission_ids, active_session_id, updated_at) VALUES (1, ?, NULL, ?)'
        )
        .run('[]', new Date().toISOString());
    }
  }

  getCampaignProgress(): CampaignProgressRecord {
    const row = this.db
      .prepare('SELECT completed_mission_ids, active_session_id, updated_at FROM campaign_progress WHERE id = 1')
      .get() as { completed_mission_ids: string; active_session_id: string | null; updated_at: string } | undefined;

    if (!row) {
      return {
        completedMissionIds: [],
        activeSessionId: null,
        updatedAt: new Date().toISOString(),
      };
    }

    return {
      completedMissionIds: parseCompletedIds(row.completed_mission_ids),
      activeSessionId: row.active_session_id ?? null,
      updatedAt: row.updated_at,
    };
  }

  updateCampaignProgress(completedMissionIds: string[], activeSessionId?: string | null): CampaignProgressRecord {
    const current = this.getCampaignProgress();
    const merged = Array.from(
      new Set(completedMissionIds.filter((id): id is string => typeof id === 'string' && id.length > 0))
    );
    const nextActive = activeSessionId !== undefined ? activeSessionId : current.activeSessionId;
    const now = new Date().toISOString();

    this.db
      .prepare(
        'UPDATE campaign_progress SET completed_mission_ids = ?, active_session_id = ?, updated_at = ? WHERE id = 1'
      )
      .run(JSON.stringify(merged), nextActive, now);

    return {
      completedMissionIds: merged,
      activeSessionId: nextActive,
      updatedAt: now,
    };
  }

  setActiveSessionId(sessionId: string | null): void {
    const now = new Date().toISOString();
    this.db
      .prepare('UPDATE campaign_progress SET active_session_id = ?, updated_at = ? WHERE id = 1')
      .run(sessionId, now);
  }

  resetCampaignProgress(keepSavedSessions: boolean = true): CampaignProgressRecord {
    const now = new Date().toISOString();
    this.db
      .prepare(
        "UPDATE campaign_progress SET completed_mission_ids = '[]', active_session_id = NULL, updated_at = ? WHERE id = 1"
      )
      .run(now);

    if (!keepSavedSessions) {
      this.db.prepare('DELETE FROM saved_sessions').run();
    } else {
      this.db.prepare('DELETE FROM saved_sessions WHERE is_autosave = 1').run();
    }

    return {
      completedMissionIds: [],
      activeSessionId: null,
      updatedAt: now,
    };
  }

  listSessions(): SavedSessionSummary[] {
    const rows = this.db
      .prepare(
        `SELECT id, name, scenario_id, scenario_title, scenario_sequence,
                objectives_passed, objectives_total, is_autosave, created_at, updated_at
         FROM saved_sessions
         ORDER BY is_autosave DESC, updated_at DESC`
      )
      .all() as Array<{
      id: string;
      name: string;
      scenario_id: string;
      scenario_title: string;
      scenario_sequence: number;
      objectives_passed: number;
      objectives_total: number;
      is_autosave: number;
      created_at: string;
      updated_at: string;
    }>;

    return rows.map((row) => ({
      id: row.id,
      name: row.name,
      scenarioId: row.scenario_id,
      scenarioTitle: row.scenario_title,
      scenarioSequence: row.scenario_sequence,
      objectivesPassed: row.objectives_passed,
      objectivesTotal: row.objectives_total,
      isAutosave: row.is_autosave === 1,
      createdAt: row.created_at,
      updatedAt: row.updated_at,
    }));
  }

  getSession(id: string): SavedSessionRecord | null {
    const row = this.db
      .prepare(
        `SELECT id, name, scenario_id, scenario_title, scenario_sequence,
                objectives_passed, objectives_total, is_autosave, snapshot_json, created_at, updated_at
         FROM saved_sessions
         WHERE id = ?`
      )
      .get(id) as
      | {
          id: string;
          name: string;
          scenario_id: string;
          scenario_title: string;
          scenario_sequence: number;
          objectives_passed: number;
          objectives_total: number;
          is_autosave: number;
          snapshot_json: string;
          created_at: string;
          updated_at: string;
        }
      | undefined;

    if (!row) return null;

    let parsedSnapshot: unknown = null;
    try {
      parsedSnapshot = JSON.parse(row.snapshot_json);
    } catch {
      parsedSnapshot = null;
    }

    return {
      id: row.id,
      name: row.name,
      scenarioId: row.scenario_id,
      scenarioTitle: row.scenario_title,
      scenarioSequence: row.scenario_sequence,
      objectivesPassed: row.objectives_passed,
      objectivesTotal: row.objectives_total,
      isAutosave: row.is_autosave === 1,
      snapshot: parsedSnapshot,
      createdAt: row.created_at,
      updatedAt: row.updated_at,
    };
  }

  upsertSession(input: UpsertSessionInput): SavedSessionRecord {
    const now = new Date().toISOString();
    const existing = this.db
      .prepare('SELECT created_at FROM saved_sessions WHERE id = ?')
      .get(input.id) as { created_at: string } | undefined;

    const createdAt = existing?.created_at || now;
    const isAutosaveInt = input.isAutosave ? 1 : 0;
    const snapshotJson = JSON.stringify(input.snapshot);

    this.db
      .prepare(
        `INSERT INTO saved_sessions (
           id, name, scenario_id, scenario_title, scenario_sequence,
           objectives_passed, objectives_total, is_autosave, snapshot_json, created_at, updated_at
         ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
         ON CONFLICT(id) DO UPDATE SET
           name = excluded.name,
           scenario_id = excluded.scenario_id,
           scenario_title = excluded.scenario_title,
           scenario_sequence = excluded.scenario_sequence,
           objectives_passed = excluded.objectives_passed,
           objectives_total = excluded.objectives_total,
           is_autosave = excluded.is_autosave,
           snapshot_json = excluded.snapshot_json,
           updated_at = excluded.updated_at`
      )
      .run(
        input.id,
        input.name,
        input.scenarioId,
        input.scenarioTitle,
        input.scenarioSequence,
        input.objectivesPassed,
        input.objectivesTotal,
        isAutosaveInt,
        snapshotJson,
        createdAt,
        now
      );

    if (input.setActive) {
      this.setActiveSessionId(input.id);
    }

    return {
      id: input.id,
      name: input.name,
      scenarioId: input.scenarioId,
      scenarioTitle: input.scenarioTitle,
      scenarioSequence: input.scenarioSequence,
      objectivesPassed: input.objectivesPassed,
      objectivesTotal: input.objectivesTotal,
      isAutosave: Boolean(input.isAutosave),
      snapshot: input.snapshot,
      createdAt,
      updatedAt: now,
    };
  }

  renameSession(id: string, name: string): SavedSessionSummary | null {
    const now = new Date().toISOString();
    const res = this.db
      .prepare('UPDATE saved_sessions SET name = ?, updated_at = ? WHERE id = ?')
      .run(name, now, id);

    if (res.changes === 0) return null;
    const full = this.getSession(id);
    if (!full) return null;
    const { snapshot: _snapshot, ...summary } = full;
    return summary;
  }

  deleteSession(id: string): boolean {
    const progress = this.getCampaignProgress();
    const res = this.db.prepare('DELETE FROM saved_sessions WHERE id = ?').run(id);
    if (progress.activeSessionId === id) {
      this.setActiveSessionId(null);
    }
    return Number(res.changes) > 0;
  }

  close(): void {
    this.db.close();
  }
}
