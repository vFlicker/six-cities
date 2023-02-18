import classNames from 'classnames';
import { ComponentPropsWithoutRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { logoIconSrc } from '../../assets/images';
import { AppRoute } from '../../constants';
import classes from './Logo.module.css';

type LogoProps = ComponentPropsWithoutRef<'img'> & {
  isActive?: boolean;
};

export function Logo({ isActive = true, ...props }: LogoProps): JSX.Element {
  const { pathname } = useLocation();

  const logo = <img src={logoIconSrc} alt="6 cities logo" {...props} />;

  const isRootPath = pathname === AppRoute.Root;
  if (isRootPath) return logo;

  const className = classNames(classes.link, {
    [classes.active]: !isRootPath && isActive,
  });

  return (
    <Link to={AppRoute.Root} className={className}>
      {logo}
    </Link>
  );
}
