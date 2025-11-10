// src/pages/settings/system/ApiConfigSection.tsx
import React from 'react';
import { ApiConfig } from './types';

interface Props {
  api: ApiConfig;
  onChange: (api: ApiConfig) => void;
}

const ApiConfigSection: React.FC<Props> = ({ api, onChange }) => {
  const handleChange = (key: keyof ApiConfig, value: string) => {
    onChange({ ...api, [key]: value });
  };

  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-800 mb-3">🌐 Cấu hình API Backend</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
        <div>
          <label className="block text-gray-600 mb-1">URL API</label>
          <input
            type="text"
            value={api.baseUrl}
            onChange={(e) => handleChange('baseUrl', e.target.value)}
            className="w-full border border-gray-200 rounded-lg px-3 py-2"
            placeholder="https://api.doan-truong.edu.vn"
          />
        </div>
        <div>
          <label className="block text-gray-600 mb-1">Phiên bản API</label>
          <input
            type="text"
            value={api.version}
            onChange={(e) => handleChange('version', e.target.value)}
            className="w-full border border-gray-200 rounded-lg px-3 py-2"
            placeholder="v1"
          />
        </div>
      </div>
    </div>
  );
};

export default ApiConfigSection;
