import { RouteObject } from 'react-router-dom';
import { lazy } from 'react';

const BirthdayWish = lazy(() => import('../pages/BirthdayWish'));

export const birthdayRoute: RouteObject = {
  path: '/birthday-wish',
  element: <BirthdayWish />,
};
