import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '~/hooks';
import { offerSlice } from '~/store';

import {
  HeaderSection,
  NearPlacesSection,
  NotFoundSection,
  PropertySection,
} from '../../sections';
import { ErrorMessage, Page, Spinner } from '../../shared';

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
  const isLoading = useAppSelector(offerSlice.selectIsLoading);
  const error = useAppSelector(offerSlice.selectError);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(offerSlice.fetchOffer(Number(id)));
  }, [dispatch, id]);

  if (isLoading) return <Spinner />;

  if (error) return <ErrorMessage />;

  if (!offer) return <NotFoundSection />;

  return (
    <S.PageContent>
      <PropertySection {...offer} />
      <NearPlacesSection />
    </S.PageContent>
  );
}
