import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { AppRoute } from '../../const';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { isUserAuthorized } from '../../utils';

type PrivateRouteProps = {
  children: JSX.Element;
};

function PrivateRoute({ children }: PrivateRouteProps): JSX.Element {
  const authorizationStatus = useSelector(getAuthorizationStatus);

  return isUserAuthorized(authorizationStatus)
    ? children
    : <Navigate to={AppRoute.Login} />;
}

export default PrivateRoute;
