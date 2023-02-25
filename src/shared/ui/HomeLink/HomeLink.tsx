import cn from 'classnames';
import { ComponentPropsWithoutRef, Fragment } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { AppRoute } from '../../constants';
import classes from './HomeLink.module.css';

type HomeLinkProps = ComponentPropsWithoutRef<'a'> & {
  isActive?: boolean;
};

export function HomeLink({
  isActive,
  children,
  className,
  ...props
}: HomeLinkProps): JSX.Element {
  const { pathname } = useLocation();

  const isHomeRoute = pathname === AppRoute.ROOT;
  if (isHomeRoute) return <Fragment>{children}</Fragment>;

  const classNames = cn(className, classes.link, {
    [classes.active]: !isHomeRoute && isActive,
  });

  return (
    <Link to={AppRoute.ROOT} className={classNames} {...props}>
      {children}
    </Link>
  );
}
