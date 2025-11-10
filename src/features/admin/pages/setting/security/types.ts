// src/pages/settings/security/types.ts
export interface SecuritySettings {
  twoFactorEnabled: boolean;
  maxFailedAttempts: number;
  logs: AccessLog[];
}

export interface AccessLog {
  id: number;
  user: string;
  ip: string;
  device: string;
  time: string;
  status: 'success' | 'failed';
}
