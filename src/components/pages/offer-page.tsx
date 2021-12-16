import React from 'react';
import { useParams } from 'react-router-dom';

import { TOffers } from '../../types/offer';
import { TReviews } from '../../types/review';

import { CardItemNearPlaces } from '../card-item';
import CardList from '../card-list';
import NotFoundPage from './not-found-page';
import { SectionHeader, SectionPlaces, SectionProperty } from '../sections';

type OfferPageProps = {
  offers: TOffers;
  reviews: TReviews;
};

function OfferPage({ reviews, offers }: OfferPageProps): JSX.Element {
  const { id } = useParams();

  const offer = offers.find((item) => item.id === Number(id));

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
              getCardItem={(offer) => <CardItemNearPlaces offer={offer} />}
            />
          </SectionPlaces>
        </div>
      </main>
    </div>
  );
}

export default OfferPage;
