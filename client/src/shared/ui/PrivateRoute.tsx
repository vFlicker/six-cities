import { Navigate } from 'react-router-dom';

import { AppRoute } from '~/shared/router';

type PrivateRouteProps = {
  isAuthenticated: boolean;
  children?: JSX.Element;
  redirectTo?: string;
};

function PrivateRoute({
  isAuthenticated,
  children,
  redirectTo = AppRoute.Root,
}: PrivateRouteProps): JSX.Element {
  if (isAuthenticated) return <Navigate to={redirectTo} />;
  return <>{children}</>;
}

export { PrivateRoute };
