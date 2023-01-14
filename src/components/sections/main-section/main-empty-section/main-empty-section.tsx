import { noResultsIconSrc } from '~/assets/images';
import { useAppSelector } from '~/hooks/use-app-selector';
import * as appSlice from '~/store/slices/app/slice';

import { NotFound } from '../../../shared/not-found/not-found';

import * as S from './styles';

export function MainEmptySection(): JSX.Element {
  const cityName = useAppSelector(appSlice.selectCurrentCityName);

  return (
    <S.Container>
      <S.LeftSection>
        <NotFound
          iconSrc={noResultsIconSrc}
          alt="No results icon"
          title="No places to stay available"
          description={`We could not find any property available at the moment in ${cityName}`}
        />
      </S.LeftSection>
      <S.RightSection />
    </S.Container>
  );
}
