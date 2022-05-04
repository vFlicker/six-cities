import { useDispatch, useSelector } from 'react-redux';

import { CityName } from '@/constants';
import { changeCityName } from '@/redux/state/app/app-slice';
import { getCurrentCityName } from '@/redux/state/offers/selectors';

import { LocationsItem } from '../locations-item';

export function LocationsList(): JSX.Element {
  const currentCityName = useSelector(getCurrentCityName);

  const dispatch = useDispatch();

  return (
    <ul className="locations__list tabs__list">
      {Object.entries(CityName).map(([key, cityName]) => {
        const activeClass = cityName === currentCityName ? 'tabs__item--active ' : '';

        return (
          <li key={key} className="locations__item">
            <LocationsItem
              className={`tabs__item ${activeClass}`}
              cityName={cityName}
              onLocationsItemClick={(evt) => {
                evt.preventDefault();

                if (cityName === currentCityName) return;
                dispatch(changeCityName(cityName));
              }}
            />
          </li>
        );
      })}
    </ul>
  );
}
