import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '@/hooks';
import {
  fetchOffer,
  fetchOfferNearby,
  getOffer,
  getOfferError,
  getOfferLoadingStatus,
  getOffersNearby,
  getOffersNearbyError,
  getOffersNearbyLoadingStatus,
} from '@/store';
import { Review } from '@/types';

import { CardItemNearPlaces } from '../card-item';
import { CardList } from '../card-list';
import { NotFoundPage } from './not-found-page';
import { SectionHeader, SectionPlaces, SectionProperty } from '../sections';
import { Spinner } from '../spinner';

type OfferPageProps = {
  reviews: Review[];
};

export function OfferPage({ reviews }: OfferPageProps): JSX.Element {
  const { id } = useParams();

  const offer = useAppSelector(getOffer);
  const offersNearby = useAppSelector(getOffersNearby);

  const isOfferLoading = useAppSelector(getOfferLoadingStatus);
  const isOffersNearbyLoading = useAppSelector(getOffersNearbyLoadingStatus);

  const offerError = useAppSelector(getOfferError);
  const offersNearbyError = useAppSelector(getOffersNearbyError);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchOffer(Number(id)));
    dispatch(fetchOfferNearby(Number(id)));
  }, [dispatch, id]);

  if (isOfferLoading || isOffersNearbyLoading) {
    return <Spinner />;
  }

  if (offerError || offersNearbyError) {
    return <h1>Error!</h1>;
  }

  if (!offer) {
    return <NotFoundPage />;
  }

  return (
    <div className="page">
      <SectionHeader />
      <main className="page__main page__main--property">
        <SectionProperty offer={offer} reviews={reviews} />

        <div className="container">
          <SectionPlaces className="near-places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>

            <CardList
              className="near-places__list places__list"
              offers={offersNearby}
              getCardItem={(offer) => <CardItemNearPlaces offer={offer} />}
            />
          </SectionPlaces>
        </div>
      </main>
    </div>
  );
}
