import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';

import { AppRoute } from '../../constants';
import classes from './HomeLink.module.css';

type HomeLinkProps = {
  isActive?: boolean;
  children: JSX.Element;
};

export function HomeLink({ isActive, children }: HomeLinkProps): JSX.Element {
  const { pathname } = useLocation();

  const isRootPath = pathname === AppRoute.Root;
  if (isRootPath) return children;

  const className = classNames(classes.link, {
    [classes.active]: !isRootPath && isActive,
  });

  return (
    <Link to={AppRoute.Root} className={className}>
      {children}
    </Link>
  );
}
