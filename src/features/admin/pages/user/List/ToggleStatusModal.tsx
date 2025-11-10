// src/pages/user-account/ToggleStatusModal.tsx
import React from 'react';
import { UserAccount } from './types';

interface Props {
  user: UserAccount;
  onClose: () => void;
}

const ToggleStatusModal: React.FC<Props> = ({ user, onClose }) => {
  const isLocking = user.status === 'active';

  const handleToggle = () => {
    // TODO: call API change status
    alert(`(Demo) ${isLocking ? 'Khóa' : 'Mở khóa'} tài khoản: ${user.fullName}`);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-[420px] shadow-xl">
        <h2 className="text-lg font-semibold mb-4 text-gray-800">
          {isLocking ? 'Khóa tài khoản' : 'Mở khóa tài khoản'}
        </h2>
        <p className="text-sm text-gray-600 mb-4">
          Bạn có chắc chắn muốn{' '}
          <span className="font-semibold">{isLocking ? 'khóa' : 'mở khóa'}</span> tài khoản{' '}
          <span className="font-semibold text-gray-800">
            {user.fullName} ({user.email})
          </span>
          ?
        </p>
        <div className="flex justify-end gap-3 text-sm">
          <button
            onClick={onClose}
            className="px-3 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50"
          >
            Hủy
          </button>
          <button
            onClick={handleToggle}
            className={`px-3 py-2 rounded-lg text-white ${
              isLocking ? 'bg-red-600 hover:bg-red-700' : 'bg-emerald-600 hover:bg-emerald-700'
            }`}
          >
            Xác nhận
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToggleStatusModal;
