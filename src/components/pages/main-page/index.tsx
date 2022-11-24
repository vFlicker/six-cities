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
import { ErrorPage } from '../error-page';

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

type QueryResultProps = {
  // TODO: error is unknown
  error: unknown;
  isLoading: boolean;
  hasData: boolean;
  children: JSX.Element;
};

// TODO: move to shared dir
export function QueryResult({
  isLoading,
  error,
  hasData,
  children,
}: QueryResultProps): JSX.Element {
  if (error) return <ErrorPage errorMessage={'Some Error'} />;

  if (isLoading) return <Spinner />;

  if (!hasData) return <MainEmptySection />;

  return children;
}

function MainPageContent(): JSX.Element {
  const sortedOffers = useAppSelector(offersSlice.selectSortedOffers);
  const isLoading = useAppSelector(offersSlice.selectLoadingStatus);
  const error = useAppSelector(offersSlice.selectError);

  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    dispatch(offersSlice.fetchOffers());
  }, [dispatch]);

  return (
    <QueryResult
      isLoading={isLoading}
      error={error}
      hasData={Boolean(sortedOffers.length)}
    >
      <MainSection offers={sortedOffers} />
    </QueryResult>
  );
}
