import { CityName } from '~/constants';
import { useAppDispatch, useAppSelector } from '~/hooks';
import { appSlice } from '~/store';

import { Container, Location } from '../../shared';

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
