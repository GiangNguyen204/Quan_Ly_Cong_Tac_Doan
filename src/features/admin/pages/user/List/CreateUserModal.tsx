// src/pages/user-account/CreateUserModal.tsx
import React, { useState } from 'react';

interface Props {
  onClose: () => void;
}

const CreateUserModal: React.FC<Props> = ({ onClose }) => {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    studentCode: '',
    role: 'member',
    branch: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    // TODO: call API tạo tài khoản
    alert('(Demo) Tạo tài khoản: ' + JSON.stringify(form));
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-[460px] shadow-xl">
        <h2 className="text-lg font-semibold mb-4 text-gray-800">Thêm tài khoản mới</h2>

        <div className="space-y-3 text-sm">
          <input
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            placeholder="Họ tên"
            className="w-full border border-gray-200 rounded-lg px-3 py-2"
          />
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full border border-gray-200 rounded-lg px-3 py-2"
          />
          <input
            name="studentCode"
            value={form.studentCode}
            onChange={handleChange}
            placeholder="MSSV (nếu có)"
            className="w-full border border-gray-200 rounded-lg px-3 py-2"
          />
          <input
            name="branch"
            value={form.branch}
            onChange={handleChange}
            placeholder="Chi đoàn (VD: CTK14A)"
            className="w-full border border-gray-200 rounded-lg px-3 py-2"
          />
          <div>
            <label className="block text-xs text-gray-500 mb-1">Vai trò</label>
            <select
              name="role"
              value={form.role}
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-lg px-3 py-2"
            >
              <option value="member">Đoàn viên</option>
              <option value="secretary">Bí thư chi đoàn</option>
              <option value="admin">Quản trị viên</option>
            </select>
          </div>
        </div>

        <div className="flex justify-end gap-3 mt-6 text-sm">
          <button
            onClick={onClose}
            className="px-3 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50"
          >
            Hủy
          </button>
          <button
            onClick={handleSubmit}
            className="px-3 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
          >
            Lưu
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateUserModal;
