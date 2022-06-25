import { LocationItem } from '@/components/shared';
import { useAppSelector } from '@/hooks';
import { appSlice } from '@/store';

import * as S from './styles';

export function LocationSection(): JSX.Element {
  const cityName = useAppSelector(appSlice.getCurrentCityName);

  return (
    <S.Section>
      <LocationItem isActive cityName={cityName} />
    </S.Section>
  );
}
