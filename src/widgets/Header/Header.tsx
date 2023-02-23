import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';

import { UserAvatar, UserEmail } from '~/entities/user';
import { selectIsUserAuthenticated } from '~/entities/user/model';
import { SignOut } from '~/features/SignOut';
import { AppRoute } from '~/shared/constants';
import { useAppSelector } from '~/shared/hooks';
import { HomeLink } from '~/shared/ui/HomeLink';
import { Logo } from '~/shared/ui/Logo';

import classes from './Header.module.css';

function AuthNav(): JSX.Element {
  return (
    <>
      <li className={classes.navItem}>
        <Link
          to={AppRoute.Favorites}
          className={classNames(classes.navLink, classes.navLinkUser)}
        >
          <UserAvatar />
          <UserEmail />
        </Link>
        <span className={classes.favoriteCount}>3</span>
      </li>
      <li className={classes.navItem}>
        <SignOut />
      </li>
    </>
  );
}

function NoAuthNav(): JSX.Element {
  return (
    <li className={classes.navItem}>
      <Link
        to={AppRoute.Login}
        className={classNames(classes.navLink, classes.navLinkUser)}
      >
        <UserAvatar />
        <span>Sign in</span>
      </Link>
    </li>
  );
}

export function Header(): JSX.Element {
  const { pathname } = useLocation();

  const isUserAuthenticated = useAppSelector(selectIsUserAuthenticated);

  const navList = isUserAuthenticated ? <AuthNav /> : <NoAuthNav />;

  // TODO: Чи буде навігація створюватися кожен раз?
  const isLoginRoute = pathname === AppRoute.Login;
  const navigation = !isLoginRoute && (
    <nav className={classes.nav}>
      <ul className={classes.navList}>{navList}</ul>
    </nav>
  );

  return (
    <header className={classes.header}>
      <div className="container">
        <div className={classes.wrapper}>
          <div className={classes.left}>
            <HomeLink isActive>
              <Logo width="81px" height="41px" />
            </HomeLink>
          </div>
          {navigation}
        </div>
      </div>
    </header>
  );
}
