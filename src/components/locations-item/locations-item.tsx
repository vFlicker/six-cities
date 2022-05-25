import { MouseEvent, PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';

import { AppRoute } from '@/constants';

type LocationsItemProps = PropsWithChildren<{
  cityName: string;
  className?: string;

  onLocationsItemClick?: (evt: MouseEvent) => void;
}>;

export function LocationsItem({
  className,
  cityName,

  onLocationsItemClick,
}: LocationsItemProps): JSX.Element {
  return (
    <Link
      to={AppRoute.ROOT}
      className={`locations__item-link ${className}`}
      onClick={onLocationsItemClick}
    >
      <span>{cityName}</span>
    </Link>
  );
}
