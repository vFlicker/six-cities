import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { AppRoute } from '@/constants';
import { getAuthorizationStatus } from '@/redux/state/user/selectors';
import { isUserAuthorized } from '@/utils/user';

type PrivateRouteProps = {
  children: JSX.Element;
};

export function PrivateRoute({ children }: PrivateRouteProps): JSX.Element {
  const authorizationStatus = useSelector(getAuthorizationStatus);

  return isUserAuthorized(authorizationStatus)
    ? children
    : <Navigate to={AppRoute.LOGIN} />;
}
