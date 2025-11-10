// src/pages/role-permission/CreateRoleModal.tsx
import React, { useState } from 'react';
import { Role } from './types';

interface Props {
  onClose: () => void;
  onSubmit: (role: Role) => void;
}

const CreateRoleModal: React.FC<Props> = ({ onClose, onSubmit }) => {
  const [form, setForm] = useState({ name: '', description: '' });

  const handleSubmit = () => {
    const newRole: Role = {
      id: Date.now(),
      name: form.name,
      description: form.description,
      permissions: { create: false, read: false, update: false, delete: false },
    };
    onSubmit(newRole);
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-[420px] shadow-xl">
        <h2 className="text-lg font-semibold mb-4 text-gray-800">Thêm quyền mới</h2>
        <div className="space-y-3 text-sm">
          <input
            placeholder="Tên quyền (VD: Quản lý hoạt động)"
            className="w-full border border-gray-200 rounded-lg px-3 py-2"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <textarea
            placeholder="Mô tả quyền"
            className="w-full border border-gray-200 rounded-lg px-3 py-2"
            rows={3}
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
          />
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
            Thêm
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateRoleModal;
