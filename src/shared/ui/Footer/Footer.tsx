import classNames from 'classnames';

import { HomeLink } from '../HomeLink';
import { Logo } from '../Logo';
import classes from './Footer.module.css';

export function Footer(): JSX.Element {
  return (
    <footer className={classNames('container', classes.footer)}>
      <HomeLink>
        <Logo width="64" height="32" />
      </HomeLink>
    </footer>
  );
}