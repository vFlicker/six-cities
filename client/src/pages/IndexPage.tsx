import styled from '@emotion/styled';
import { Helmet } from 'react-helmet-async';

import { Container } from '~/helpers/Container';
import { DefaultLayout } from '~/helpers/DefaultLayout';
import { VisuallyHiddenMixin } from '~/helpers/VisuallyHiddenMixin';
import { Header } from '~/sections/Header';
import { LocationTabs } from '~/sections/LocationTabs';
import { Offers } from '~/sections/Offers';
import { Color } from '~/tokens/colors';

function IndexPage(): JSX.Element {
  return (
    <DefaultLayout>
      <Helmet>
        <title>Home page</title>
      </Helmet>
      <StyledHeader />
      <main>
        <StyledTitle>Six Cities</StyledTitle>
        <LocationTabs />
        <StyledContent>
          <StyledContainer>
            <Offers />
            <StyledMap>map</StyledMap>
          </StyledContainer>
        </StyledContent>
      </main>
    </DefaultLayout>
  );
}

export { IndexPage };

const StyledHeader = styled(Header)`
  background-color: ${Color.GRAY_10};
`;

const StyledTitle = styled.h1`
  ${VisuallyHiddenMixin}
`;

const StyledContent = styled.div`
  padding: 32px 0;
`;

const StyledContainer = styled(Container)`
  display: flex;
`;

const StyledMap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`;
