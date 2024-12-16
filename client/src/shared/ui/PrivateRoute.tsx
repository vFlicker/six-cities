import { Navigate } from 'react-router-dom';

import { AuthStatus } from '~/shared/auth';
import { AppRoute } from '~/shared/router';

type PrivateRouteProps = {
  authStatus: AuthStatus;
  children?: JSX.Element;
  redirectTo?: string;
};

function PrivateRoute({
  authStatus,
  children,
  redirectTo = AppRoute.Root,
}: PrivateRouteProps): JSX.Element {
  const isUserAuthenticated = authStatus === AuthStatus.Auth;
  if (isUserAuthenticated) return <Navigate to={redirectTo} />;
  return <>{children}</>;
}

export { PrivateRoute };
