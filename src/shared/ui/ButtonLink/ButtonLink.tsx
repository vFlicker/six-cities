import cn from 'classnames';
import { ComponentPropsWithoutRef } from 'react';
import { Link, To } from 'react-router-dom';

import classes from './ButtonLink.module.css';

type ButtonLinkProps = ComponentPropsWithoutRef<'a'> & {
  to: To;
  isActive?: boolean;
};

export function ButtonLink({
  to,
  isActive,
  children,
  className,
  ...props
}: ButtonLinkProps): JSX.Element {
  const classNames = cn(className, classes.link, {
    [classes.active]: isActive,
  });

  return (
    <Link to={to} className={classNames} {...props}>
      <span>{children}</span>
    </Link>
  );
}
