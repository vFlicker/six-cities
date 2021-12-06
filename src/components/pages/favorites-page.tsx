import React from 'react';

import { SectionHeader, SectionFooter, SectionFavorites } from '../sections';

function FavoritesPage(): JSX.Element {
  return (
    <div className="page">
      <SectionHeader />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <SectionFavorites />
        </div>
      </main>
      <SectionFooter />
    </div>
  );
}

export default FavoritesPage;
