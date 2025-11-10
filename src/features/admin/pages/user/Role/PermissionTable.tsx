// src/pages/role-permission/PermissionTable.tsx
import React from 'react';
import { Role } from './types';
// import PermissionCell from './PermissionCell'
import PermissionCell from './PermissionCell';

interface Props {
  roles: Role[];
  onToggle: (id: number, key: keyof Role['permissions']) => void;
  onEdit: (role: Role) => void;
}

const PermissionTable: React.FC<Props> = ({ roles, onToggle, onEdit }) => {
  return (
    <table className="w-full text-sm border-collapse">
      <thead>
        <tr className="text-left text-gray-600 border-b border-gray-100">
          <th className="py-2">Tên quyền</th>
          <th>Mô tả</th>
          <th className="text-center">Create</th>
          <th className="text-center">Read</th>
          <th className="text-center">Update</th>
          <th className="text-center">Delete</th>
          <th className="text-right">Hành động</th>
        </tr>
      </thead>
      <tbody>
        {roles.map((role) => (
          <tr key={role.id} className="border-b border-gray-50 hover:bg-gray-50">
            <td className="py-2 font-medium text-gray-800">{role.name}</td>
            <td className="text-gray-600">{role.description}</td>
            <PermissionCell
              checked={role.permissions.create}
              onClick={() => onToggle(role.id, 'create')}
            />
            <PermissionCell
              checked={role.permissions.read}
              onClick={() => onToggle(role.id, 'read')}
            />
            <PermissionCell
              checked={role.permissions.update}
              onClick={() => onToggle(role.id, 'update')}
            />
            <PermissionCell
              checked={role.permissions.delete}
              onClick={() => onToggle(role.id, 'delete')}
            />
            <td className="text-right">
              <button
                onClick={() => onEdit(role)}
                className="text-xs text-blue-600 hover:underline"
              >
                Sửa
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PermissionTable;
