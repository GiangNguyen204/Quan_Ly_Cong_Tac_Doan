// src/pages/settings/general/LanguageSelector.tsx
import React from 'react';

interface Props {
  language: 'vi' | 'en';
  onChange: (lang: 'vi' | 'en') => void;
}

const LanguageSelector: React.FC<Props> = ({ language, onChange }) => {
  return (
    <div className="pt-4 border-t border-gray-100">
      <h2 className="text-lg font-semibold text-gray-800 mb-3">🌐 Ngôn ngữ</h2>
      <div className="flex items-center gap-4 text-sm">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="lang"
            checked={language === 'vi'}
            onChange={() => onChange('vi')}
            className="accent-blue-600"
          />
          <span>Tiếng Việt</span>
        </label>

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="lang"
            checked={language === 'en'}
            onChange={() => onChange('en')}
            className="accent-blue-600"
          />
          <span>English</span>
        </label>
      </div>
    </div>
  );
};

export default LanguageSelector;
