// src/pages/settings/security/mockData.ts
import { SecuritySettings } from './types';

export const DEFAULT_SECURITY_SETTINGS: SecuritySettings = {
  twoFactorEnabled: false,
  maxFailedAttempts: 5,
  logs: [
    {
      id: 1,
      user: 'Nguyễn Văn A',
      ip: '192.168.1.25',
      device: 'Chrome - Windows',
      time: '2025-11-10 09:12:43',
      status: 'success',
    },
    {
      id: 2,
      user: 'Trần Thị B',
      ip: '10.0.0.5',
      device: 'Safari - iPhone',
      time: '2025-11-10 09:15:21',
      status: 'failed',
    },
    {
      id: 3,
      user: 'Lê Văn C',
      ip: '192.168.0.101',
      device: 'Edge - Windows',
      time: '2025-11-09 22:48:30',
      status: 'success',
    },
  ],
};
