// src/pages/settings/security/SecuritySettingsPage.tsx
import React, { useState } from 'react';
import { SecuritySettings } from './types';
import { DEFAULT_SECURITY_SETTINGS } from './mockData';
import TwoFactorSection from './TwoFactorSection';
import LoginLimitSection from './LoginLimitSection';
import AccessLogTable from './AccessLogTable';

const SecuritySettingsPage: React.FC = () => {
  const [settings, setSettings] = useState<SecuritySettings>(DEFAULT_SECURITY_SETTINGS);

  const handleChange = (key: keyof SecuritySettings, value: any) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  };

  const handleSave = () => {
    alert('(Demo) Lưu cấu hình bảo mật:\n' + JSON.stringify(settings, null, 2));
  };

  return (
    <div className="p-6 space-y-8 bg-gray-50 min-h-screen">
      <div>
        <h1 className="text-2xl font-semibold text-gray-800">🔐 Cài đặt bảo mật</h1>
        <p className="text-gray-500">
          Quản lý các tùy chọn bảo mật hệ thống: đăng nhập 2 lớp, giới hạn lỗi và nhật ký truy cập.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-8">
        <TwoFactorSection
          enabled={settings.twoFactorEnabled}
          onChange={(val) => handleChange('twoFactorEnabled', val)}
        />

        <LoginLimitSection
          maxAttempts={settings.maxFailedAttempts}
          onChange={(val) => handleChange('maxFailedAttempts', val)}
        />

        <AccessLogTable logs={settings.logs} />

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

export default SecuritySettingsPage;
