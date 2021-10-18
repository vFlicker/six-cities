import React, { PropsWithChildren } from 'react';
import { OfferListItem } from '../../types';
import { SectionHeader, SectionFooter, SectionFavorites } from '../sections';

type FavoritesPageProps = {
  offers: OfferListItem[]
}

function FavoritesPage({ offers }: PropsWithChildren<FavoritesPageProps>): React.ReactElement {
  return (
    <div className="page">
      <SectionHeader />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <SectionFavorites offers={offers} />
        </div>
      </main>
      <SectionFooter />
    </div>
  );
}

export default FavoritesPage;
