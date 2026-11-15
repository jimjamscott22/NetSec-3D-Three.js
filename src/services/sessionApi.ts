import { SimSnapshot } from '../sim/types';

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
  snapshot: SimSnapshot;
}

export interface ProgressResponse {
  completedMissionIds: string[];
  activeSessionId: string | null;
  updatedAt: string;
  activeSession: SavedSessionRecord | null;
}

export interface SaveSessionPayload {
  id?: string;
  name?: string;
  scenarioId: string;
  scenarioTitle: string;
  scenarioSequence: number;
  objectivesPassed: number;
  objectivesTotal: number;
  isAutosave?: boolean;
  snapshot: SimSnapshot;
  setActive?: boolean;
}

async function requestJson<T>(url: string, init?: RequestInit): Promise<T> {
  const res = await fetch(url, {
    ...init,
    headers: {
      'Content-Type': 'application/json',
      ...(init?.headers || {}),
    },
  });
  if (!res.ok) {
    const errBody = await res.json().catch(() => ({}));
    throw new Error((errBody as { error?: string }).error || `Request failed (${res.status})`);
  }
  return res.json() as Promise<T>;
}

export const sessionApi = {
  async getProgress(): Promise<ProgressResponse> {
    return requestJson<ProgressResponse>('/api/progress');
  },

  async updateProgress(completedMissionIds: string[], activeSessionId?: string | null): Promise<void> {
    await requestJson('/api/progress', {
      method: 'PUT',
      body: JSON.stringify({ completedMissionIds, activeSessionId }),
    });
  },

  async clearActiveSession(): Promise<void> {
    await requestJson('/api/progress/clear-active', {
      method: 'POST',
    });
  },

  async resetCampaign(keepSavedSessions = true): Promise<ProgressResponse> {
    return requestJson<ProgressResponse>('/api/progress/reset', {
      method: 'POST',
      body: JSON.stringify({ keepSavedSessions }),
    });
  },

  async listSessions(): Promise<SavedSessionSummary[]> {
    const data = await requestJson<{ sessions: SavedSessionSummary[] }>('/api/sessions');
    return data.sessions || [];
  },

  async getSession(id: string): Promise<SavedSessionRecord> {
    const data = await requestJson<{ session: SavedSessionRecord }>(`/api/sessions/${encodeURIComponent(id)}`);
    return data.session;
  },

  async saveSession(payload: SaveSessionPayload): Promise<SavedSessionRecord> {
    const data = await requestJson<{ session: SavedSessionRecord }>('/api/sessions', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
    return data.session;
  },

  async deleteSession(id: string): Promise<void> {
    await requestJson(`/api/sessions/${encodeURIComponent(id)}`, {
      method: 'DELETE',
    });
  },

  async markSessionActive(id: string): Promise<void> {
    await requestJson(`/api/sessions/${encodeURIComponent(id)}`, {
      method: 'PATCH',
      body: JSON.stringify({ setActive: true }),
    });
  },
};
