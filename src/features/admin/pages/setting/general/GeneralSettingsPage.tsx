// src/pages/settings/general/GeneralSettingsPage.tsx
import React, { useState } from 'react';
import { OrganizationSettings } from './types';
import { DEFAULT_SETTINGS } from './mockData';
import OrganizationInfoForm from './OrganizationInfoForm';
import UploadSection from './UploadSection';
import LanguageSelector from './LanguageSelector';

const GeneralSettingsPage: React.FC = () => {
  const [settings, setSettings] = useState<OrganizationSettings>(DEFAULT_SETTINGS);

  const handleChange = (key: keyof OrganizationSettings, value: any) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  };

  const handleSave = () => {
    alert('(Demo) Đã lưu cấu hình:\n' + JSON.stringify(settings, null, 2));
  };

  return (
    <div className="p-6 space-y-8 bg-gray-50 min-h-screen">
      <div>
        <h1 className="text-2xl font-semibold text-gray-800">Cài đặt chung</h1>
        <p className="text-gray-500">
          Thay đổi thông tin tổ chức, logo, màu sắc và ngôn ngữ hệ thống.
        </p>
      </div>

      {/* Form thông tin tổ chức */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-6">
        <OrganizationInfoForm settings={settings} onChange={handleChange} />
        <UploadSection settings={settings} onChange={handleChange} />
        <LanguageSelector
          language={settings.language}
          onChange={(lang) => handleChange('language', lang)}
        />

        <div className="flex justify-end">
          <button
            onClick={handleSave}
            className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700"
          >
            💾 Lưu thay đổi
          </button>
        </div>
      </div>
    </div>
  );
};

export default GeneralSettingsPage;
