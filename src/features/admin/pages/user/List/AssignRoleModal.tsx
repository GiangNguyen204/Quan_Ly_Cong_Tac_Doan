// src/pages/user-account/AssignRoleModal.tsx
import React, { useState } from 'react';
import { UserAccount } from './types';

interface Props {
  user: UserAccount;
  onClose: () => void;
}

const AssignRoleModal: React.FC<Props> = ({ user, onClose }) => {
  const [role, setRole] = useState<UserAccount['role']>(user.role);

  const handleSave = () => {
    // TODO: update role qua API
    alert(`(Demo) Cập nhật vai trò cho ${user.fullName} thành: ${role}`);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-[420px] shadow-xl">
        <h2 className="text-lg font-semibold mb-4 text-gray-800">Phân quyền tài khoản</h2>

        <p className="text-sm text-gray-600 mb-4">
          Tài khoản:{' '}
          <span className="font-semibold text-gray-800">
            {user.fullName} ({user.email})
          </span>
        </p>

        <div className="text-sm space-y-2">
          <label className="block text-xs text-gray-500 mb-1">Chọn vai trò</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value as UserAccount['role'])}
            className="w-full border border-gray-200 rounded-lg px-3 py-2"
          >
            <option value="member">Đoàn viên</option>
            <option value="secretary">Bí thư chi đoàn</option>
            <option value="admin">Quản trị viên</option>
          </select>
        </div>

        <div className="flex justify-end gap-3 mt-6 text-sm">
          <button
            onClick={onClose}
            className="px-3 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50"
          >
            Hủy
          </button>
          <button
            onClick={handleSave}
            className="px-3 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
          >
            Lưu
          </button>
        </div>
      </div>
    </div>
  );
};

export default AssignRoleModal;
