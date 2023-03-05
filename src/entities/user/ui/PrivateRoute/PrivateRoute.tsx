import { Navigate } from 'react-router-dom';

import { AppRoute } from '~/shared/constants';
import { useAppSelector } from '~/shared/hooks';

import { selectIsAuthenticated } from '../../model/user';

type PrivateRouteProps = {
  children: JSX.Element;
};

export function PrivateRoute({ children }: PrivateRouteProps): JSX.Element {
  const isAuthenticated = useAppSelector(selectIsAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to={AppRoute.LOGIN} />;
  }

  return children;
}
