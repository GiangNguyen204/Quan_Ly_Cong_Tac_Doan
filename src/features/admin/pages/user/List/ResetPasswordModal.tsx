// src/pages/user-account/ResetPasswordModal.tsx
import React from 'react';
import { UserAccount } from './types';

interface Props {
  user: UserAccount;
  onClose: () => void;
}

const ResetPasswordModal: React.FC<Props> = ({ user, onClose }) => {
  const handleReset = () => {
    // TODO: gọi API reset mật khẩu
    alert('(Demo) Đặt lại mật khẩu cho ' + user.email);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-[420px] shadow-xl">
        <h2 className="text-lg font-semibold mb-4 text-gray-800">Đặt lại mật khẩu</h2>
        <p className="text-sm text-gray-600 mb-4">
          Bạn chắc chắn muốn đặt lại mật khẩu cho tài khoản{' '}
          <span className="font-semibold text-gray-800">
            {user.fullName} ({user.email})
          </span>
          ? Hệ thống sẽ gửi mật khẩu mới hoặc link đặt lại đến email này.
        </p>

        <div className="flex justify-end gap-3 text-sm">
          <button
            onClick={onClose}
            className="px-3 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50"
          >
            Hủy
          </button>
          <button
            onClick={handleReset}
            className="px-3 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
          >
            Xác nhận
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordModal;
