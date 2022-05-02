import { MouseEvent, PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

type LocationsItemProps = PropsWithChildren<{
  cityName: string;
  className?: string;
  onLocationsItemClick?: (evt: MouseEvent) => void;
}>;

function LocationsItem(props: LocationsItemProps): JSX.Element {
  const { className, cityName, onLocationsItemClick } = props;

  return (
    <Link
      to={AppRoute.Root}
      className={`locations__item-link ${className}`}
      onClick={onLocationsItemClick}
    >
      <span>{cityName}</span>
    </Link>
  );
}

export default LocationsItem;
