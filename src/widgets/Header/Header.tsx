import classNames from 'classnames';

import { Logo } from '~/shared/ui/Logo';

import classes from './Header.module.css';

export function Header(): JSX.Element {
  return (
    <header>
      <div className="container">
        <div className={classes.wrapper}>
          <div className={classes.left}>
            <Logo width="81px" height="41px" />
          </div>
          <nav className={classes.nav}>
            <ul className={classes.navList}>
              <li className={classes.navItem}>
                <a className={classNames(classes.navLink)} href="/">
                  <div className={classes.userNameWrapper}></div>
                  <span className={classes.userName}>
                    Oliver.conner@gmail.com
                  </span>
                </a>
                <span className={classes.favoriteCount}>3</span>
              </li>
              <li className={classes.navItem}>
                <a href="/" className={classes.navLink}>
                  <span className={classes.signOut}>Sign out</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
