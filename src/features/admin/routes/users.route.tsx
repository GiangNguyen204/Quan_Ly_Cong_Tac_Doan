import { adminRoute } from '@routes/admin.routes';
import { createRoute } from '@tanstack/react-router';
import UserPage from '../pages/user/User';
import UserAccountManagement from '../pages/user/List/UserAccountManagement';
import RolePermissionManagement from '../pages/user/Role/RolePermissionPage';

const userRouteAdmin = createRoute({
  getParentRoute: () => adminRoute,
  path: '/users',
});

const userAccountListRouteAdmin = createRoute({
  getParentRoute: () => userRouteAdmin,
  path: '/list',
  component: UserAccountManagement,
});
const userRolePermissionRouteAdmin = createRoute({
  getParentRoute: () => userRouteAdmin,
  path: '/roles',
  component: RolePermissionManagement,
});

const userTree = userRouteAdmin.addChildren([
  userAccountListRouteAdmin,
  userRolePermissionRouteAdmin,
]);

export { userRouteAdmin, userAccountListRouteAdmin, userTree, userRolePermissionRouteAdmin };
