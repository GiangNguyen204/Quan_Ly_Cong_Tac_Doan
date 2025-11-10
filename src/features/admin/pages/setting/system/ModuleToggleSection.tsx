// src/pages/settings/system/ModuleToggleSection.tsx
import React from 'react';
import { ModuleToggle } from './types';

interface Props {
  modules: ModuleToggle;
  onChange: (modules: ModuleToggle) => void;
}

const ModuleToggleSection: React.FC<Props> = ({ modules, onChange }) => {
  const handleToggle = (key: keyof ModuleToggle) => {
    onChange({ ...modules, [key]: !modules[key] });
  };

  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-800 mb-3">🧩 Module hệ thống</h2>
      <p className="text-sm text-gray-500 mb-4">
        Bật hoặc tắt các chức năng tùy theo nhu cầu sử dụng.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
        {Object.entries(modules).map(([key, value]) => (
          <label
            key={key}
            className="flex items-center justify-between border border-gray-200 rounded-lg px-4 py-3 hover:bg-gray-50 cursor-pointer"
          >
            <span className="capitalize text-gray-700">
              {key === 'news'
                ? 'Tin tức'
                : key === 'activities'
                ? 'Hoạt động'
                : key === 'achievements'
                ? 'Điểm rèn luyện'
                : 'Phản hồi / Góp ý'}
            </span>
            <input
              type="checkbox"
              checked={value}
              onChange={() => handleToggle(key as keyof ModuleToggle)}
              className="w-4 h-4 accent-blue-600"
            />
          </label>
        ))}
      </div>
    </div>
  );
};

export default ModuleToggleSection;
