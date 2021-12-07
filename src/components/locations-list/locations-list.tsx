import React, { MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CityName } from '../../const';
import { fetchOffers } from '../../store/api-actions';
import { getCurrentCityName } from '../../store/offers-data/selectors';
import { changeCityName } from '../../store/offers-data/action';

import LocationsItem from '../locations-item';

function LocationsList(): JSX.Element {
  const currentCityName = useSelector(getCurrentCityName);

  const dispatch = useDispatch();

  const handleLocationsItemClick = (evt: MouseEvent, cityName: CityName) => {
    evt.preventDefault();

    if (cityName === currentCityName) {
      return;
    }

    dispatch(changeCityName(cityName));
    dispatch(fetchOffers());
  };

  return (
    <ul className="locations__list tabs__list">
      {Object.entries(CityName).map(([key, cityName]) => {
        const activeClass = cityName === currentCityName ? 'tabs__item--active ' : '';

        return (
          <li key={key} className="locations__item">
            <LocationsItem
              className={`tabs__item ${activeClass}`}
              cityName={cityName}
              onLocationsItemClick={(evt: MouseEvent) => handleLocationsItemClick(evt, cityName)}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default LocationsList;
