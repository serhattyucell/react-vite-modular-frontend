import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { UsersPage } from '@/modules/users/pages/users-page';
import { EmptyPage } from '@/modules/empty/pages/empty-page';
import { LoginPage } from '@/modules/auth/pages/login-page';
import { ROUTES } from '@/common/constants/routes';
import { MainLayout } from '@/app/layouts/main-layout';

const router = createBrowserRouter([
  {
    path: ROUTES.root,
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Navigate to={ROUTES.auth.login} replace />,
      },
      {
        path: ROUTES.auth.login,
        element: <LoginPage />,
      },
      {
        path: ROUTES.users,
        element: <UsersPage />,
      },
      {
        path: ROUTES.empty,
        element: <EmptyPage />,
      },
    ],
  },
]);

export const AppRouter = (): JSX.Element => {
  return <RouterProvider router={router} />;
};
