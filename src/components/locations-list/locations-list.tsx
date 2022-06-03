import { CityName } from '@/constants';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { appSlice } from '@/store';

import { LocationsItem } from '../locations-item';

export function LocationsList(): JSX.Element {
  const currentCityName = useAppSelector(appSlice.getCurrentCityName);

  const dispatch = useAppDispatch();

  return (
    <ul className="locations__list tabs__list">
      {Object.entries(CityName).map(([key, cityName]) => {
        const activeClass = cityName === currentCityName ? 'tabs__item--active ' : '';

        // TODO: look at NavLink
        return (
          <li key={key} className="locations__item">
            <LocationsItem
              className={`tabs__item ${activeClass}`}
              cityName={cityName}
              onLocationsItemClick={(evt) => {
                evt.preventDefault();

                if (cityName === currentCityName) return;
                dispatch(appSlice.changeCityName(cityName));
              }}
            />
          </li>
        );
      })}
    </ul>
  );
}
