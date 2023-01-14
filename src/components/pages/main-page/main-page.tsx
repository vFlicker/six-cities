import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { CityName } from '~/constants';
import { useAppDispatch } from '~/hooks/use-app-dispatch';
import { useAppSelector } from '~/hooks/use-app-selector';
import * as appSlice from '~/store/slices/app/slice';

import { HeaderSection } from '../../sections/header-section/header-section';
import { FilterSection } from '../../sections/filter-section/filter-section';
import { MainSection } from '../../sections/main-section/main-section';

import * as S from './styles';

export function MainPage(): JSX.Element {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentCityName = useAppSelector(appSlice.selectCurrentCityName);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const filter = searchParams.get('filter') as CityName;
    if (!filter) return;
    dispatch(appSlice.changeCityName(filter));
  }, [dispatch, searchParams]);

  useEffect(() => {
    setSearchParams(`filter=${currentCityName}`);
  }, [setSearchParams, currentCityName]);

  return (
    <S.Page>
      <HeaderSection />

      <S.PageContent>
        <S.Title>Cities</S.Title>

        <FilterSection />

        <S.Wrapper>
          <MainSection />
        </S.Wrapper>
      </S.PageContent>
    </S.Page>
  );
}
