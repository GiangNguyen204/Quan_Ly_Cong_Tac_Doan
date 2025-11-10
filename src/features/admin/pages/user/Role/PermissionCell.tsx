// src/pages/role-permission/PermissionCell.tsx
import React from 'react';

interface Props {
  checked: boolean;
  onClick: () => void;
}

const PermissionCell: React.FC<Props> = ({ checked, onClick }) => (
  <td className="text-center">
    <input
      type="checkbox"
      checked={checked}
      onChange={onClick}
      className="w-4 h-4 accent-blue-600 cursor-pointer"
    />
  </td>
);

export default PermissionCell;
