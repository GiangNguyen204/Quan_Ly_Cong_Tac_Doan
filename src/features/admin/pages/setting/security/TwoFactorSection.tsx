// src/pages/settings/security/TwoFactorSection.tsx
import React from 'react';

interface Props {
  enabled: boolean;
  onChange: (enabled: boolean) => void;
}

const TwoFactorSection: React.FC<Props> = ({ enabled, onChange }) => {
  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-800 mb-3">🧩 Đăng nhập hai lớp (2FA)</h2>
      <p className="text-sm text-gray-500 mb-4">
        Khi bật, người dùng phải xác thực thêm mã OTP qua email hoặc ứng dụng bảo mật khi đăng nhập.
      </p>

      <div className="flex items-center justify-between border border-gray-200 rounded-lg px-4 py-3 hover:bg-gray-50 cursor-pointer">
        <span className="text-gray-700">Bật đăng nhập 2 lớp</span>
        <input
          type="checkbox"
          checked={enabled}
          onChange={(e) => onChange(e.target.checked)}
          className="w-5 h-5 accent-blue-600"
        />
      </div>
    </div>
  );
};

export default TwoFactorSection;
