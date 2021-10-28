import React, { MouseEvent, PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

type LocationsItemProps = {
  className?: string,
  city: string,
  onClick?: (evt: MouseEvent) => void,
};

function LocationsItem({ className = '', city, onClick }: PropsWithChildren<LocationsItemProps>): React.ReactElement {
  return (
    <Link
      to={AppRoute.ROOT}
      className={`locations__item-link ${className}`}
      onClick={onClick}
    >
      <span>{city}</span>
    </Link>
  );
}

export default LocationsItem;
