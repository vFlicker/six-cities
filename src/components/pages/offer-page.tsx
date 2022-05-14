import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '@/hooks';
import { offerSlice, offersNearbySlice } from '@/store';
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

  const offer = useAppSelector(offerSlice.getOffer);
  const offersNearby = useAppSelector(offersNearbySlice.getOffersNearby);

  const isOfferLoading = useAppSelector(offerSlice.getOfferLoadingStatus);
  const isOffersNearbyLoading = useAppSelector(offersNearbySlice.getOffersNearbyLoadingStatus);

  const offerError = useAppSelector(offerSlice.getOfferError);
  const offersNearbyError = useAppSelector(offersNearbySlice.getOffersNearbyError);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(offerSlice.fetchOffer(Number(id)));
    dispatch(offersNearbySlice.fetchOfferNearby(Number(id)));
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
