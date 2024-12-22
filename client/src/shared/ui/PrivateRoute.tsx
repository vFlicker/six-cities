import { Navigate } from 'react-router-dom';

import { AppRoute } from '~/shared/libs/router';

type PrivateRouteProps = {
  isAuthenticated: boolean;
  redirectTo: string;
  children?: JSX.Element;
};

function PrivateRoute({
  isAuthenticated,
  children,
  redirectTo = AppRoute.Root,
}: PrivateRouteProps): JSX.Element {
  if (!isAuthenticated) return <Navigate to={redirectTo} />;
  return <>{children}</>;
}

export { PrivateRoute };
