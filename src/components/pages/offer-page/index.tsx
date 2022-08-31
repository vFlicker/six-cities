import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '~/hooks';
import { offerSlice } from '~/store';

import {
  HeaderSection,
  NearPlacesSection,
  PropertySection,
} from '../../sections';
import { Page, Spinner } from '../../shared';
import { ErrorPage } from '../error-page';

import * as S from './styles';

export function OfferPage(): JSX.Element {
  const { id } = useParams();

  const offer = useAppSelector(offerSlice.getOffer);
  const isLoading = useAppSelector(offerSlice.getLoadingStatus);
  const error = useAppSelector(offerSlice.getError);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(offerSlice.fetchOffer(Number(id)));
    dispatch(offerSlice.fetchComments(Number(id)));
    dispatch(offerSlice.fetchOffersNearby(Number(id)));
  }, [dispatch, id]);

  if (isLoading || !offer) {
    return <Spinner />;
  }

  // TODO: add Error page to all pages
  if (error) {
    return <ErrorPage />;
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
