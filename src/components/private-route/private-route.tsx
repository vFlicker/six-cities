import React, { PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { AppRoute, AuthorizationStatus } from '../../const';
import { getAuthorizationStatus } from '../../store/user-process';

type PrivateRouteProps = {
  children: React.ReactElement,
};

function PrivateRoute(props: PropsWithChildren<PrivateRouteProps>): React.ReactElement {
  const { children } = props;

  const authorizationStatus = useSelector(getAuthorizationStatus);

  return authorizationStatus === AuthorizationStatus.AUTH
    ? children
    : <Navigate to={AppRoute.LOGIN} />;
}

export default PrivateRoute;
