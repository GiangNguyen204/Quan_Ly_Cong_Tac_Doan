// src/pages/role-permission/RolePermissionPage.tsx
import React, { useState } from 'react';
import { Role } from './types';
import { MOCK_ROLES } from './mockData';
import PermissionTable from './PermissionTable';
import CreateRoleModal from './CreateRoleModal';
import EditRoleModal from './EditRoleModal';

const RolePermissionManagement: React.FC = () => {
  const [roles, setRoles] = useState<Role[]>(MOCK_ROLES);
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);
  const [modal, setModal] = useState<'create' | 'edit' | null>(null);

  const handleToggle = (id: number, key: keyof Role['permissions']) => {
    setRoles((prev) =>
      prev.map((r) =>
        r.id === id
          ? {
              ...r,
              permissions: { ...r.permissions, [key]: !r.permissions[key] },
            }
          : r,
      ),
    );
  };

  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">Quyền & Vai trò</h1>
          <p className="text-gray-500">Quản lý quyền truy cập (CRUD) theo từng loại tài khoản.</p>
        </div>
        <button
          onClick={() => setModal('create')}
          className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700"
        >
          + Thêm quyền mới
        </button>
      </div>

      {/* Permission Matrix Table */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <PermissionTable
          roles={roles}
          onToggle={handleToggle}
          onEdit={(role) => {
            setSelectedRole(role);
            setModal('edit');
          }}
        />
      </div>

      {/* Modals */}
      {modal === 'create' && (
        <CreateRoleModal
          onClose={() => setModal(null)}
          onSubmit={(newRole) => {
            setRoles([...roles, newRole]);
            setModal(null);
          }}
        />
      )}
      {modal === 'edit' && selectedRole && (
        <EditRoleModal
          role={selectedRole}
          onClose={() => setModal(null)}
          onSubmit={(updated) => {
            setRoles((prev) => prev.map((r) => (r.id === updated.id ? updated : r)));
            setModal(null);
          }}
        />
      )}
    </div>
  );
};

export default RolePermissionManagement;
