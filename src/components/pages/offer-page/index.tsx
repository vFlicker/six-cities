import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '~/hooks';
import { offerSlice, offersSlice, apiActions } from '~/store';

import {
  HeaderSection,
  NearPlacesSection,
  PropertySection,
} from '../../sections';
import { Page, Spinner } from '../../shared';
import { ErrorPage } from '../error-page';
import { NotFoundPage } from '../not-found-page';

import * as S from './styles';

export function OfferPage(): JSX.Element {
  const { id } = useParams();

  const offer = useAppSelector(offerSlice.getOffer);
  const isLoading = useAppSelector(offersSlice.getLoadingStatus);
  const error = useAppSelector(offersSlice.getError);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(apiActions.fetchOffer(Number(id)));
    dispatch(apiActions.fetchComments(Number(id)));
    dispatch(apiActions.fetchOffersNearby(Number(id)));
  }, [dispatch, id]);

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorPage />;
  }

  if (!offer) {
    return <NotFoundPage />;
  }

  return (
    <Page>
      <HeaderSection />

      <S.PageContent>
        <PropertySection offer={offer} />
        <NearPlacesSection />
      </S.PageContent>
    </Page>
  );
}
