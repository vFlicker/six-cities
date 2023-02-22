import classNames from 'classnames';

import { Logo } from '../Logo';
import classes from './Footer.module.css';

export function Footer(): JSX.Element {
  return (
    <footer className={classNames('container', classes.footer)}>
      <Logo width="64" height="32" isActive={false} />
    </footer>
  );
}
