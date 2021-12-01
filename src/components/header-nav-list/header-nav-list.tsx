import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { AppRoute, AuthorizationStatus } from '../../const';
import { getAuthorizationStatus, getUser } from '../../store/user-process';
import { TRootState } from '../../types/state';
import { TUser } from '../../types/user';

type HeaderNavListProps = {
  authorizationStatus: AuthorizationStatus,
  user: TUser | null,
};

const USER_DEFAULT_AVATAR_URL = '../img/avatar.svg';

function HeaderNavList(props: HeaderNavListProps): React.ReactElement {
  const { authorizationStatus, user } = props;

  const style = {
    backgroundImage: user ? `url(${user.avatarUrl})` : `url(${USER_DEFAULT_AVATAR_URL})`,
    borderRadius: '50%',
  };

  if (authorizationStatus !== AuthorizationStatus.AUTH) {
    return (
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link to={AppRoute.LOGIN} className="header__nav-link header__nav-link--profile">
            <div className="header__avatar-wrapper user__avatar-wrapper" />
            <span className="header__login">Sign in</span>
          </Link>
        </li>
      </ul>
    );
  }

  return (
    <ul className="header__nav-list">
      <li className="header__nav-item user">
        <Link to={AppRoute.FAVORITES} className="header__nav-link header__nav-link--profile">
          <div
            className="header__avatar-wrapper user__avatar-wrapper"
            style={style}
          />
          <span className="header__user-name user__name">{user?.email}</span>
        </Link>
      </li>
      <li className="header__nav-item">
        <Link to={AppRoute.ROOT} className="header__nav-link">
          <span className="header__signout">Sign out</span>
        </Link>
      </li>
    </ul>
  );
}

const mapStateToProps = (state: TRootState) => ({
  authorizationStatus: getAuthorizationStatus(state),
  user: getUser(state),
});

export { HeaderNavList };
export default connect(mapStateToProps)(HeaderNavList);
