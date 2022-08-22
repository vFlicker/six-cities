import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '~/hooks';
import { offerSlice, offersNearbySlice } from '~/store';

import {
  HeaderSection,
  NearPlacesSection,
  PropertySection,
} from '../../sections';
import { Spinner } from '../../spinner';
import { Page } from '../../shared';
import { ErrorPage } from '../error-page';

import * as S from './styles';

export function OfferPage(): JSX.Element {
  const { id } = useParams();

  const offer = useAppSelector(offerSlice.getOffer);
  const isOfferLoading = useAppSelector(offerSlice.getLoadingStatus);
  const offerError = useAppSelector(offerSlice.getError);

  const offersNearby = useAppSelector(offersNearbySlice.getOffers);
  const isOffersNearbyLoading = useAppSelector(
    offersNearbySlice.getLoadingStatus,
  );
  const offersNearbyError = useAppSelector(offersNearbySlice.getError);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(offerSlice.fetchOffer(Number(id)));
    dispatch(offerSlice.fetchComments(Number(id)));
    dispatch(offersNearbySlice.fetchOfferNearby(Number(id)));
  }, [dispatch, id, offer?.isFavorite]);

  if (isOfferLoading || isOffersNearbyLoading) {
    return <Spinner />;
  }

  // TODO: add Error page to all pages
  if (!offer || offerError || offersNearbyError) {
    return <ErrorPage />;
  }

  return (
    <Page>
      <HeaderSection />

      <S.PageContent>
        <PropertySection offer={offer} />
        <NearPlacesSection offersNearby={offersNearby} />
      </S.PageContent>
    </Page>
  );
}
