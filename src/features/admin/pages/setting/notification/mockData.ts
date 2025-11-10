// src/pages/settings/notification/mockData.ts
import { NotificationSettings } from './types';

export const DEFAULT_NOTIFICATION_SETTINGS: NotificationSettings = {
  channels: {
    email: true,
    sms: false,
    push: true,
  },
  templates: [
    {
      id: 1,
      name: 'Hoạt động mới',
      subject: 'Thông báo hoạt động mới',
      content:
        'Xin chào {{name}}, chi đoàn {{branch}} vừa có hoạt động mới: {{activity}}. Hãy tham gia ngay!',
    },
    {
      id: 2,
      name: 'Cập nhật điểm rèn luyện',
      subject: 'Điểm rèn luyện của bạn đã được cập nhật',
      content:
        'Xin chào {{name}}, điểm rèn luyện kỳ này của bạn là {{score}} điểm. Hãy tiếp tục phấn đấu nhé!',
    },
  ],
  autoSendEnabled: true,
};
