import classNames from 'classnames';
import { Link } from 'react-router-dom';

import { UserAvatar, UserEmail } from '~/entities/user';
import { selectIsUserAuthenticated } from '~/entities/user/model';
import { SignOut } from '~/features/SignOut';
import { AppRoute } from '~/shared/constants';
import { useAppSelector } from '~/shared/hooks';
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
  const isUserAuthenticated = useAppSelector(selectIsUserAuthenticated);

  const navList = isUserAuthenticated ? <AuthNav /> : <NoAuthNav />;

  return (
    <header>
      <div className="container">
        <div className={classes.wrapper}>
          <div className={classes.left}>
            <Logo width="81px" height="41px" />
          </div>
          <nav className={classes.nav}>
            <ul className={classes.navList}>{navList}</ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
