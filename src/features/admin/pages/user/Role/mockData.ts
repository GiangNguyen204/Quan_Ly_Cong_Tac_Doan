// src/pages/role-permission/mockData.ts
import { Role } from './types';

export const MOCK_ROLES: Role[] = [
  {
    id: 1,
    name: 'Admin',
    description: 'Quản trị viên có toàn quyền CRUD trên tất cả dữ liệu.',
    permissions: { create: true, read: true, update: true, delete: true },
  },
  {
    id: 2,
    name: 'Bí thư',
    description:
      'Quản lý chi đoàn, phê duyệt hoạt động, chỉnh sửa nội dung trong phạm vi chi đoàn.',
    permissions: { create: true, read: true, update: true, delete: false },
  },
  {
    id: 3,
    name: 'Đoàn viên',
    description: 'Tham gia hoạt động, đọc tin tức và xem điểm rèn luyện cá nhân.',
    permissions: { create: false, read: true, update: false, delete: false },
  },
];
