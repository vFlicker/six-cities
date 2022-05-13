import { Navigate } from 'react-router-dom';

import { AppRoute } from '@/constants';
import { useAppSelector } from '@/hooks';
import { getAuthorizationStatus, isUserAuthorized } from '@/store';

type PrivateRouteProps = {
  children: JSX.Element;
};

// TODO: how we get token?
export function PrivateRoute({ children }: PrivateRouteProps): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return isUserAuthorized(authorizationStatus)
    ? children
    : <Navigate to={AppRoute.LOGIN} />;
}
