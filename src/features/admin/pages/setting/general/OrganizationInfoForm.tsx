// src/pages/settings/general/OrganizationInfoForm.tsx
import React from 'react';
import { OrganizationSettings } from './types';

interface Props {
  settings: OrganizationSettings;
  onChange: (key: keyof OrganizationSettings, value: any) => void;
}

const OrganizationInfoForm: React.FC<Props> = ({ settings, onChange }) => (
  <div>
    <h2 className="text-lg font-semibold text-gray-800 mb-4">🏫 Thông tin tổ chức</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
      <div>
        <label className="block text-gray-600 mb-1">Tên trường</label>
        <input
          type="text"
          value={settings.schoolName}
          onChange={(e) => onChange('schoolName', e.target.value)}
          className="w-full border border-gray-200 rounded-lg px-3 py-2"
        />
      </div>

      <div>
        <label className="block text-gray-600 mb-1">Liên chi đoàn</label>
        <input
          type="text"
          value={settings.unionName}
          onChange={(e) => onChange('unionName', e.target.value)}
          className="w-full border border-gray-200 rounded-lg px-3 py-2"
        />
      </div>

      <div className="md:col-span-2">
        <label className="block text-gray-600 mb-1">Khẩu hiệu</label>
        <input
          type="text"
          value={settings.slogan}
          onChange={(e) => onChange('slogan', e.target.value)}
          className="w-full border border-gray-200 rounded-lg px-3 py-2"
        />
      </div>
    </div>
  </div>
);

export default OrganizationInfoForm;
