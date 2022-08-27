import { useLayoutEffect } from 'react';
import { useAppDispatch, useAppSelector } from '~/hooks';
import { offerSlice } from '~/store';

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
  const offers = useAppSelector(offerSlice.getOffers);
  const isLoading = useAppSelector(offerSlice.getLoadingStatus);
  const error = useAppSelector(offerSlice.getError);

  const dispatch = useAppDispatch();

  // TODO: add loading error component
  useLayoutEffect(() => {
    dispatch(offerSlice.fetchOffers());
  }, [dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <h1>Error</h1>;
  }

  if (!offers || !offers.length) {
    return <MainEmptySection />;
  }

  return <MainSection offers={offers} />;
}
