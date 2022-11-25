import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '~/hooks';
import { offerSlice, offersSlice } from '~/store';

import {
  ErrorSection,
  HeaderSection,
  NearPlacesSection,
  NotFoundSection,
  PropertySection,
} from '../../sections';
import { Page, Spinner } from '../../shared';

import * as S from './styles';

export function OfferPage(): JSX.Element {
  return (
    <Page>
      <HeaderSection />
      <OfferContent />
    </Page>
  );
}

function OfferContent(): JSX.Element {
  const { id } = useParams();

  const offer = useAppSelector(offerSlice.selectOffer);
  const isLoading = useAppSelector(offerSlice.selectLoadingStatus);
  const error = useAppSelector(offerSlice.selectError);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(offerSlice.fetchOffer(Number(id)));
    dispatch(offersSlice.fetchOffersNearby(Number(id)));
  }, [dispatch, id]);

  if (isLoading) return <Spinner />;

  if (error) return <ErrorSection />;

  if (!offer) return <NotFoundSection />;

  return (
    <S.PageContent>
      <PropertySection offer={offer} />
      <NearPlacesSection />
    </S.PageContent>
  );
}
