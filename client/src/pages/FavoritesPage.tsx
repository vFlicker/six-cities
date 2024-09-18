import styled from '@emotion/styled';
import { Helmet } from 'react-helmet-async';

import { Container } from '~/helpers/Container';
import { DefaultLayout } from '~/helpers/DefaultLayout';
import { Favorites } from '~/sections/Favorites';
import { Footer } from '~/sections/Footer';
import { Header } from '~/sections/Header';

function FavoritesPage(): JSX.Element {
  return (
    <DefaultLayout>
      <Helmet>
        <title>Favorites</title>
      </Helmet>
      <Header />
      <main>
        <StyledContainer>
          <Favorites />
        </StyledContainer>
      </main>
      <Footer />
    </DefaultLayout>
  );
}

export { FavoritesPage };

const StyledContainer = styled(Container)`
  display: flex;
`;
