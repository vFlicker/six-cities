import React, { PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';

import { AppRoute, AuthorizationStatus } from '../../const';
import { getAuthorizationStatus } from '../../store/user-process';
import { TRootState } from '../../types/state';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus,
  children: React.ReactElement,
};

function PrivateRoute(props: PropsWithChildren<PrivateRouteProps>): React.ReactElement {
  const { authorizationStatus, children } = props;

  return authorizationStatus === AuthorizationStatus.AUTH
    ? children
    : <Navigate to={AppRoute.LOGIN} />;
}

const mapStateToProps = (state: TRootState) => ({
  authorizationStatus: getAuthorizationStatus(state),
});

export { PrivateRoute };
export default connect(mapStateToProps)(PrivateRoute);
