import React, { MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CityName } from '../../const';
import { changeCityName } from '../../store/model/app/app-slice';
import { getCurrentCityName } from '../../store/model/offers/selectors';

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
