// src/pages/settings/system/types.ts
export interface ApiConfig {
  baseUrl: string;
  version: string;
}

export interface ModuleToggle {
  news: boolean;
  activities: boolean;
  achievements: boolean;
  feedback: boolean;
}

export interface SystemSettings {
  api: ApiConfig;
  modules: ModuleToggle;
}
