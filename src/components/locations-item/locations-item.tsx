import React, { MouseEvent, PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute, CityName } from '../../const';

type LocationsItemProps = {
  className?: string,
  cityName: CityName,
  onLocationsItemClick?: (evt: MouseEvent) => void,
};

function LocationsItem({ className = '', cityName, onLocationsItemClick }: PropsWithChildren<LocationsItemProps>): React.ReactElement {
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

export default LocationsItem;
