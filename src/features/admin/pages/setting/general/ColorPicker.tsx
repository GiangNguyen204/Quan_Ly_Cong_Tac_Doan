// src/pages/settings/general/ColorPicker.tsx
import React from 'react';

interface Props {
  color: string;
  onChange: (color: string) => void;
}

const ColorPicker: React.FC<Props> = ({ color, onChange }) => {
  return (
    <div className="mt-4 flex items-center gap-3">
      <label className="text-gray-600 text-sm">Màu chủ đạo:</label>
      <input
        type="color"
        value={color}
        onChange={(e) => onChange(e.target.value)}
        className="w-10 h-10 rounded cursor-pointer border border-gray-300"
      />
      <span className="text-sm text-gray-600">{color}</span>
    </div>
  );
};

export default ColorPicker;
