// src/pages/settings/notification/NotificationSettingsPage.tsx
import React, { useState } from 'react';
import { NotificationSettings } from './types';
import { DEFAULT_NOTIFICATION_SETTINGS } from './mockData';
import ChannelConfigSection from './ChannelConfigSection';
import TemplateManager from './TemplateManager';
import TestNotificationSection from './TestNotificationSection';
import AutoSendToggle from './AutoSendToggle';

const NotificationSettingsPage: React.FC = () => {
  const [settings, setSettings] = useState<NotificationSettings>(DEFAULT_NOTIFICATION_SETTINGS);

  const handleChange = (key: keyof NotificationSettings, value: any) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  };

  const handleSave = () => {
    alert('(Demo) Đã lưu cấu hình thông báo:\n' + JSON.stringify(settings, null, 2));
  };

  return (
    <div className="p-6 space-y-8 bg-gray-50 min-h-screen">
      <div>
        <h1 className="text-2xl font-semibold text-gray-800">🔔 Cài đặt thông báo</h1>
        <p className="text-gray-500">Cấu hình kênh gửi, mẫu thông báo và tùy chọn gửi tự động.</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-8">
        <ChannelConfigSection
          channels={settings.channels}
          onChange={(val) => handleChange('channels', val)}
        />

        <TemplateManager
          templates={settings.templates}
          onChange={(val) => handleChange('templates', val)}
        />

        <TestNotificationSection />

        <AutoSendToggle
          enabled={settings.autoSendEnabled}
          onChange={(val) => handleChange('autoSendEnabled', val)}
        />

        <div className="flex justify-end">
          <button
            onClick={handleSave}
            className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700"
          >
            💾 Lưu cài đặt
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotificationSettingsPage;
