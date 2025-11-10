// src/pages/settings/system/SystemSettingsPage.tsx
import React, { useState } from 'react';
import { SystemSettings } from './types';
import { DEFAULT_SYSTEM_SETTINGS } from './mockData';
import ApiConfigSection from './ApiConfigSection';
import ModuleToggleSection from './ModuleToggleSection';

const SystemSettingsPage: React.FC = () => {
  const [settings, setSettings] = useState<SystemSettings>(DEFAULT_SYSTEM_SETTINGS);

  const handleChange = (key: keyof SystemSettings, value: any) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  };

  const handleSave = () => {
    alert('(Demo) Đã lưu cấu hình hệ thống:\n' + JSON.stringify(settings, null, 2));
  };

  return (
    <div className="p-6 space-y-8 bg-gray-50 min-h-screen">
      <div>
        <h1 className="text-2xl font-semibold text-gray-800">⚙️ Cài đặt hệ thống</h1>
        <p className="text-gray-500">Quản lý cấu hình API và bật/tắt các module của hệ thống.</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-8">
        <ApiConfigSection api={settings.api} onChange={(api) => handleChange('api', api)} />

        <ModuleToggleSection
          modules={settings.modules}
          onChange={(modules) => handleChange('modules', modules)}
        />

        <div className="flex justify-end">
          <button
            onClick={handleSave}
            className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700"
          >
            💾 Lưu cấu hình
          </button>
        </div>
      </div>
    </div>
  );
};

export default SystemSettingsPage;
