import { Navigate } from 'react-router-dom';

import { userModel } from '~/entities/user';
import { AppRoute } from '~/shared/constants';
import { useAppSelector } from '~/shared/hooks';

type PrivateRouteProps = {
  children: JSX.Element;
};

export function PrivateRoute({ children }: PrivateRouteProps): JSX.Element {
  const isAuthenticated = useAppSelector(userModel.selectIsAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to={AppRoute.LOGIN} />;
  }

  return children;
}
