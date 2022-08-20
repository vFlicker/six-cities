import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '~/hooks';
import { offerSlice, offersNearbySlice } from '~/store';

import { CardItemNearPlaces } from '../card-item';
import { CardList } from '../card-list';
import { HeaderSection, SectionPlaces, SectionProperty } from '../sections';
import { Spinner } from '../spinner';
import { ErrorPage } from './error-page';
import { Container } from '../shared';

export function OfferPage(): JSX.Element {
  const { id } = useParams();

  const offer = useAppSelector(offerSlice.getOffer);
  const isOfferLoading = useAppSelector(offerSlice.getOfferLoadingStatus);
  const offerError = useAppSelector(offerSlice.getOfferError);

  const offersNearby = useAppSelector(offersNearbySlice.getOffersNearby);
  const isOffersNearbyLoading = useAppSelector(
    offersNearbySlice.getOffersNearbyLoadingStatus,
  );
  const offersNearbyError = useAppSelector(
    offersNearbySlice.getOffersNearbyError,
  );

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
    <div className="page">
      <HeaderSection />
      <main className="page__main page__main--property">
        <SectionProperty offer={offer} />

        <Container>
          <SectionPlaces className="near-places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            {/* TODO: remove all className */}
            <CardList
              className="near-places__list places__list"
              offers={offersNearby}
              getCardItem={(offer) => <CardItemNearPlaces offer={offer} />}
            />
          </SectionPlaces>
        </Container>
      </main>
    </div>
  );
}
