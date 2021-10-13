import React, { PropsWithChildren } from 'react';
import { CardType } from '../../const';
import { OfferListItem } from '../../types';
import Header from '../header';
import CardList from '../card-list';
import Footer from '../footer';

type FavoritesPageProps = {
  offers: OfferListItem[]
}

function FavoritesPage({ offers }: PropsWithChildren<FavoritesPageProps>): React.ReactElement {
  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="/">
                      <span>Amsterdam</span>
                    </a>
                  </div>
                </div>

                <CardList offers={offers} cardType={CardType.FAVORITES} />
              </li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default FavoritesPage;
