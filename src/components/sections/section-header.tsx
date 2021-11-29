import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { AppRoute } from '../../const';
import { NameSpace } from '../../store/root-reducer';
import { TUser } from '../../types/user';
import { TRootState } from '../../types/state';

type SectionHeaderProps = {
  user: TUser | null,
};

function SectionHeader({ user }: SectionHeaderProps): React.ReactElement {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to={AppRoute.ROOT} className="header__logo-link header__logo-link--active">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          <nav className="header__nav">
            {user ? (
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="/">
                    <div className="header__avatar-wrapper user__avatar-wrapper" />
                    <span className="header__user-name user__name">{user.email}</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <Link to={AppRoute.ROOT} className="header__nav-link">
                    <span className="header__signout">Sign out</span>
                  </Link>
                </li>
              </ul>
            ) : (
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link to={AppRoute.LOGIN} className="header__nav-link header__nav-link--profile">
                    <div className="header__avatar-wrapper user__avatar-wrapper" />
                    <span className="header__login">Sign in</span>
                  </Link>
                </li>
              </ul>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}

const mapStateToProps = (state: TRootState) => ({
  user: state[NameSpace.USER_PROCESS].user,
});

export { SectionHeader };
export default connect(mapStateToProps)(SectionHeader);
