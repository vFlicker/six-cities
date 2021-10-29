import React, { MouseEvent, PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute, CityName } from '../../const';

type LocationsItemProps = {
  className?: string,
  cityName: CityName,
  onClick?: (evt: MouseEvent) => void,
};

function LocationsItem({ className = '', cityName, onClick }: PropsWithChildren<LocationsItemProps>): React.ReactElement {
  return (
    <Link
      to={AppRoute.ROOT}
      className={`locations__item-link ${className}`}
      onClick={onClick}
    >
      <span>{cityName}</span>
    </Link>
  );
}

export default LocationsItem;
