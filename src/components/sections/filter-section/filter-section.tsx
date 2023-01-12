import { CityName } from '~/constants';
import { useAppDispatch } from '~/hooks/use-app-dispatch';
import { useAppSelector } from '~/hooks/use-app-selector';
import { appSlice } from '~/store';

import { Container } from '../../shared/container';
import { Location } from '../../shared/location/location';

import * as S from './styles';

export function FilterSection(): JSX.Element {
  return (
    <S.Section>
      <Container>
        <FilterList />
      </Container>
    </S.Section>
  );
}

function FilterList(): JSX.Element {
  const currentCityName = useAppSelector(appSlice.selectCurrentCityName);

  const dispatch = useAppDispatch();

  return (
    <S.List>
      {Object.entries(CityName).map(([key, cityName]) => (
        <S.Item key={key}>
          <Location
            isActive={cityName === currentCityName}
            cityName={cityName}
            onClick={(evt) => {
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
