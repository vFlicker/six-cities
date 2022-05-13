import { Link } from 'react-router-dom';

import { AppRoute, AuthorizationStatus } from '@/constants';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { logout, getAuthorizationStatus, getUser } from '@/store';

const USER_DEFAULT_AVATAR_URL = '../img/avatar.svg';

export function HeaderNavList(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const user = useAppSelector(getUser);

  const dispatch = useAppDispatch();

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
        <Link
          to={AppRoute.ROOT}
          className="header__nav-link"
          onClick={() => dispatch(logout())}
        >
          <span className="header__signout">Sign out</span>
        </Link>
      </li>
    </ul>
  );
}
