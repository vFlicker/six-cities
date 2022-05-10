import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { AppRoute } from '@/constants';
import { getAuthorizationStatus, isUserAuthorized } from '@/store';

type PrivateRouteProps = {
  children: JSX.Element;
};

export function PrivateRoute({ children }: PrivateRouteProps): JSX.Element {
  const authorizationStatus = useSelector(getAuthorizationStatus);

  return isUserAuthorized(authorizationStatus)
    ? children
    : <Navigate to={AppRoute.LOGIN} />;
}
