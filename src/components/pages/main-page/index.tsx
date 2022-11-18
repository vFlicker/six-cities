import { useLayoutEffect } from 'react';

import { useAppDispatch, useAppSelector } from '~/hooks';
import { Spinner } from '../../shared';
import { apiActions, offersSlice } from '~/store';

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
  const offers = useAppSelector(offersSlice.getOffers);
  const isLoading = useAppSelector(offersSlice.getLoadingStatus);
  const error = useAppSelector(offersSlice.getError);

  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    dispatch(apiActions.fetchOffers());
  }, [dispatch]);

  return (
    <QueryResult
      isLoading={isLoading}
      error={error}
      hasData={Boolean(offers.length)}
    >
      <MainSection offers={offers} />
    </QueryResult>
  );
}
