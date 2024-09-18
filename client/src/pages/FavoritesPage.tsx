import styled from '@emotion/styled';
import { Helmet } from 'react-helmet-async';

import { Container } from '~/helpers/Container';
import { Favorites } from '~/sections/Favorites';

function FavoritesPage(): JSX.Element {
  return (
    <StyledMain>
      <Helmet>
        <title>Favorites</title>
      </Helmet>

      <StyledContainer>
        <Favorites />
      </StyledContainer>
    </StyledMain>
  );
}

export { FavoritesPage };

const StyledMain = styled.main``;

const StyledContainer = styled(Container)`
  display: flex;
`;
