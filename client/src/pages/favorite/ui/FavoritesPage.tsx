import { Helmet } from 'react-helmet-async';

import { DefaultLayout } from '~/helpers/DefaultLayout';
import { Footer } from '~/shared/ui/Footer';
import { Header } from '~/widgets/header';

import { EmptyFavorites } from './EmptyFavorites';
import { Favorites } from './Favorites';

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
