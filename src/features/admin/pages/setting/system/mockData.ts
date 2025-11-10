// src/pages/settings/system/mockData.ts
import { SystemSettings } from './types';

export const DEFAULT_SYSTEM_SETTINGS: SystemSettings = {
  api: {
    baseUrl: 'https://api.doan-truong.edu.vn',
    version: 'v1',
  },
  modules: {
    news: true,
    activities: true,
    achievements: false,
    feedback: true,
  },
};
