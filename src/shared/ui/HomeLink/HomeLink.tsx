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

  const isHomeRoute = pathname === AppRoute.Root;
  if (isHomeRoute) return children;

  const className = classNames(classes.link, {
    [classes.active]: !isHomeRoute && isActive,
  });

  return (
    <Link to={AppRoute.Root} className={className}>
      {children}
    </Link>
  );
}
