// src/pages/settings/notification/types.ts
export interface NotificationChannel {
  email: boolean;
  sms: boolean;
  push: boolean;
}

export interface NotificationTemplate {
  id: number;
  name: string;
  subject: string;
  content: string;
}

export interface NotificationSettings {
  channels: NotificationChannel;
  templates: NotificationTemplate[];
  autoSendEnabled: boolean;
}
