// src/pages/settings/general/UploadSection.tsx
import React, { useRef } from 'react';
import { OrganizationSettings } from './types';
//import ColorPicker from './ColorPicker';
import ColorPicker from './ColorPicker';

interface Props {
  settings: OrganizationSettings;
  onChange: (key: keyof OrganizationSettings, value: any) => void;
}

const UploadSection: React.FC<Props> = ({ settings, onChange }) => {
  const logoInput = useRef<HTMLInputElement>(null);
  const faviconInput = useRef<HTMLInputElement>(null);

  const handleUpload = (file: File, key: keyof OrganizationSettings) => {
    const url = URL.createObjectURL(file);
    onChange(key, url);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-gray-800">🎨 Giao diện & Logo</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <img
            src={settings.logoUrl}
            alt="Logo"
            className="w-16 h-16 object-contain border rounded-lg bg-gray-50"
          />
          <div>
            <button
              onClick={() => logoInput.current?.click()}
              className="px-3 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50 text-sm"
            >
              Tải logo mới
            </button>
            <input
              ref={logoInput}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => e.target.files && handleUpload(e.target.files[0], 'logoUrl')}
            />
          </div>
        </div>

        {/* Favicon */}
        <div className="flex items-center gap-4">
          <img
            src={settings.faviconUrl}
            alt="Favicon"
            className="w-12 h-12 object-contain border rounded-lg bg-gray-50"
          />
          <div>
            <button
              onClick={() => faviconInput.current?.click()}
              className="px-3 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50 text-sm"
            >
              Tải favicon mới
            </button>
            <input
              ref={faviconInput}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => e.target.files && handleUpload(e.target.files[0], 'faviconUrl')}
            />
          </div>
        </div>
      </div>

      <ColorPicker color={settings.primaryColor} onChange={(c) => onChange('primaryColor', c)} />
    </div>
  );
};

export default UploadSection;
