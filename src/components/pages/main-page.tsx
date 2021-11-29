import React from 'react';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';

import { AppRoute, AuthorizationStatus } from '../../const';
import { getAuthorizationStatus } from '../../store/user-process';
import { TRootState } from '../../types/state';

import {
  SectionHeader,
  SectionMain,
} from '../sections';

type MainPageProps = {
  authorizationStatus: AuthorizationStatus,
};

function MainPage({ authorizationStatus }: MainPageProps): React.ReactElement {
  if (authorizationStatus === AuthorizationStatus.NO_AUTH) {
    return (
      <Navigate to={AppRoute.LOGIN} />
    );
  }

  return (
    <div className="page page--gray page--main">
      <SectionHeader />
      <SectionMain />
    </div>
  );
}

const mapStateToProps = (state: TRootState) => ({
  authorizationStatus: getAuthorizationStatus(state),
});

export { MainPage };
export default connect(mapStateToProps)(MainPage);
