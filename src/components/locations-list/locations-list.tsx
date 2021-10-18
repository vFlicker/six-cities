import React from 'react';
import LocationsItem from '../locations-item';

type LocationsListProps = {
  cities: string[]
}

function LocationsList({ cities }: LocationsListProps): React.ReactElement {
  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => {
        const activeClass = city === 'Amsterdam' ? 'tabs__item--active ' : '';

        return (
          <li key={city} className="locations__item">
            <LocationsItem className={`tabs__item ${activeClass}`} city={city} />
          </li>
        );
      })}
    </ul>
  );
}

export default LocationsList;
