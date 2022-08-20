import { CityName } from '~/constants';
import { useAppDispatch, useAppSelector } from '~/hooks';
import { appSlice } from '~/store';

import { LocationItem } from '../../../shared/location-item';

import * as S from './styles';

export function LocationList(): JSX.Element {
  const currentCityName = useAppSelector(appSlice.getCurrentCityName);

  const dispatch = useAppDispatch();

  return (
    <S.List>
      {Object.entries(CityName).map(([key, cityName]) => (
        <S.Item key={key}>
          <LocationItem
            isActive={cityName === currentCityName}
            cityName={cityName}
            onLocationsItemClick={(evt) => {
              evt.preventDefault();
              if (cityName === currentCityName) return;
              dispatch(appSlice.changeCityName(cityName));
            }}
          />
        </S.Item>
      ))}
    </S.List>
  );
}
