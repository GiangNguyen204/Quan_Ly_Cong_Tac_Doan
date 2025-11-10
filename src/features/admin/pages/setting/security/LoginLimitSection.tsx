// src/pages/settings/security/LoginLimitSection.tsx
import React from 'react';

interface Props {
  maxAttempts: number;
  onChange: (val: number) => void;
}

const LoginLimitSection: React.FC<Props> = ({ maxAttempts, onChange }) => {
  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-800 mb-3">🚫 Giới hạn đăng nhập sai</h2>
      <p className="text-sm text-gray-500 mb-4">
        Giới hạn số lần nhập sai mật khẩu trước khi tài khoản bị tạm khóa.
      </p>

      <div className="flex items-center gap-3">
        <input
          type="number"
          min={1}
          max={10}
          value={maxAttempts}
          onChange={(e) => onChange(parseInt(e.target.value))}
          className="border border-gray-200 rounded-lg px-3 py-2 w-24 text-sm"
        />
        <span className="text-sm text-gray-600">lần cho phép trước khi khóa</span>
      </div>
    </div>
  );
};

export default LoginLimitSection;
