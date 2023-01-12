import { CityName, cityNames } from '~/constants';
import { useAppDispatch } from '~/hooks';
import { appSlice } from '~/store';
import { pickRandomItem } from '~/utils';

import { Location } from '../../shared/location/location';

import * as S from './styles';

type LocationSectionProps = {
  cityName?: CityName;
};

const defaultCityName = pickRandomItem(cityNames);

export function LocationSection({
  cityName = defaultCityName,
}: LocationSectionProps): JSX.Element {
  const dispatch = useAppDispatch();

  const handleLocationClick = () => {
    dispatch(appSlice.changeCityName(cityName));
  };

  return (
    <S.Section>
      <Location isActive cityName={cityName} onClick={handleLocationClick} />
    </S.Section>
  );
}
