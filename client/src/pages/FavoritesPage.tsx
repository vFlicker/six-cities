import { Helmet } from 'react-helmet-async';

import { DefaultLayout } from '~/helpers/DefaultLayout';
import { EmptyFavorites } from '~/sections/EmptyFavorites';
import { Favorites } from '~/sections/Favorites';
import { Footer } from '~/sections/Footer';
import { Header } from '~/sections/Header';

const hasFavorites = true;

function FavoritesPage(): JSX.Element {
  return (
    <DefaultLayout>
      <Helmet>
        <title>Favorites</title>
      </Helmet>
      <Header />
      <main>{hasFavorites ? <Favorites /> : <EmptyFavorites />}</main>
      <Footer />
    </DefaultLayout>
  );
}

export { FavoritesPage };
