import cn from 'classnames';
import { ComponentPropsWithoutRef } from 'react';
import { Link, To } from 'react-router-dom';

import classes from './LocationLink.module.css';

type LocationLinkProps = ComponentPropsWithoutRef<'a'> & {
  to: To;
  isActive?: boolean;
};

export function LocationLink({
  to,
  isActive,
  children,
  className,
  ...props
}: LocationLinkProps): JSX.Element {
  const classNames = cn(className, classes.link, {
    [classes.active]: isActive,
  });

  return (
    <Link to={to} className={classNames} {...props}>
      <span>{children}</span>
    </Link>
  );
}
