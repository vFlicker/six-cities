import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

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

  const offer = useSelector(getOffer);
  const offersNearby = useSelector(getOffersNearby);

  const isOfferLoading = useSelector(getOfferLoadingStatus);
  const isOffersNearbyLoading = useSelector(getOffersNearbyLoadingStatus);

  const offerError = useSelector(getOfferError);
  const offersNearbyError = useSelector(getOffersNearbyError);

  const dispatch = useDispatch();

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
