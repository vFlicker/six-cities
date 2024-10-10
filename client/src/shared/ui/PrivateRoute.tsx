import { Navigate, Outlet } from 'react-router-dom';

import { AppRoute } from '~/shared/router';

type PrivateRouteProps = {
  isAllowed: boolean;
  children?: JSX.Element;
  redirectTo?: string;
};

function PrivateRoute({
  isAllowed,
  children,
  redirectTo = AppRoute.Root,
}: PrivateRouteProps): JSX.Element {
  if (!isAllowed) return <Navigate to={redirectTo} />;
  return children ?? <Outlet />;
}

export { PrivateRoute };
