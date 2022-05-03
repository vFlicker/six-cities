import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { AppRoute, AuthorizationStatus } from '@/constants';
import { logout } from '@/redux/state/user/action';
import { getAuthorizationStatus, getUser } from '@/redux/state/user/selectors';

const USER_DEFAULT_AVATAR_URL = '../img/avatar.svg';

export function HeaderNavList(): JSX.Element {
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const user = useSelector(getUser);

  const dispatch = useDispatch();

  const handleLogoutClick = () => {
    dispatch(logout());
  };

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
          onClick={handleLogoutClick}
        >
          <span className="header__signout">Sign out</span>
        </Link>
      </li>
    </ul>
  );
}
