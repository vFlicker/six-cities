import { useAppSelector } from '~/hooks';
import { appSlice } from '~/store';

import { Location } from '../../shared';

import * as S from './styles';

export function LocationSection(): JSX.Element {
  const cityName = useAppSelector(appSlice.selectCurrentCityName);

  return (
    <S.Section>
      <Location isActive cityName={cityName} />
    </S.Section>
  );
}
