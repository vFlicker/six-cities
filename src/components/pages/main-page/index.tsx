import { useLayoutEffect } from 'react';
import { useAppDispatch, useAppSelector } from '~/hooks';
import { offersSlice } from '~/store';

import { Spinner } from '../../shared';
import {
  HeaderSection,
  LocationListSection,
  MainEmptySection,
  MainSection,
} from '../../sections';

import * as S from './styles';

export function MainPage(): JSX.Element {
  return (
    <S.Page>
      <HeaderSection />

      <S.PageContent>
        <S.Title>Cities</S.Title>

        <LocationListSection />

        <S.Wrapper>
          <MainPageContent />
        </S.Wrapper>
      </S.PageContent>
    </S.Page>
  );
}

function MainPageContent(): JSX.Element {
  const offers = useAppSelector(offersSlice.getSortedOffers);
  const isOffersLoading = useAppSelector(offersSlice.getOffersLoadingStatus);
  const offersError = useAppSelector(offersSlice.getOffersError);

  const dispatch = useAppDispatch();

  // TODO: add loading error component
  useLayoutEffect(() => {
    dispatch(offersSlice.fetchOffers());
  }, [dispatch]);

  if (isOffersLoading) {
    return <Spinner />;
  }

  if (offersError) {
    return <h1>Error</h1>;
  }

  if (!offers || !offers.length) {
    return <MainEmptySection />;
  }

  return <MainSection offers={offers} />;
}
