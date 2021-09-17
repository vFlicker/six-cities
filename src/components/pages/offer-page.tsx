import React from 'react';
import { CardType } from '../../const';
import { IOffer } from '../../interfaces';
import Header from '../header';
import CardList from '../card-list';
import Offer from '../offer';
import NotFoundPage from './not-found-page';

interface OfferPageProps {
  id: number,
  offers: IOffer[],
}

function OfferPage({ id, offers }: OfferPageProps): React.ReactElement {
  const offer = offers.find((item) => item.id === id);

  if (!offer) {
    return <NotFoundPage />;
  }

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--property">
        <Offer offer={offer} />

        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>

            <CardList offers={offers} cardType={CardType.NEAR_PLACES} />
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferPage;
