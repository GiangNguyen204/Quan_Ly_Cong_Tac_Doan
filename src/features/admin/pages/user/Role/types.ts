// src/pages/role-permission/types.ts
export interface Permission {
  create: boolean;
  read: boolean;
  update: boolean;
  delete: boolean;
}

export interface Role {
  id: number;
  name: string;
  description: string;
  permissions: Permission;
}
