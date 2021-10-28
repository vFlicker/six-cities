import React, { PropsWithChildren } from 'react';
import { useParams } from 'react-router-dom';
import { CardType } from '../../const';
import { OfferListItem, ReviewsListItem } from '../../types';
import { SectionHeader, SectionPlaces, SectionProperty } from '../sections';
import CardList from '../card-list';
import NotFoundPage from './not-found-page';

type OfferPageProps = {
  offers: OfferListItem[],
  reviews: ReviewsListItem[],
}

function OfferPage({ reviews, offers }: PropsWithChildren<OfferPageProps>): React.ReactElement {
  const { id }: {id: string} = useParams();

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

            <CardList cardType={CardType.NEAR_PLACES} />
          </SectionPlaces>
        </div>
      </main>
    </div>
  );
}

export default OfferPage;
