import styled from '@emotion/styled';
import { Helmet } from 'react-helmet-async';

import { Container } from '~/helpers/Container';
import { DefaultLayout } from '~/helpers/DefaultLayout';
import { VisuallyHiddenMixin } from '~/helpers/VisuallyHiddenMixin';
import { Color } from '~/shared/tokens/colors';
import { Header } from '~/widgets/header';

import { LocationTabs } from './LocationTabs';
import { NoAvailableOffers } from './NoAvailableOffers';
import { Offers } from './Offers';

const hasOffers = true;

function HomePage(): JSX.Element {
  return (
    <DefaultLayout>
      <Helmet>
        <title>Home page</title>
      </Helmet>
      <StyledHeader />
      <StyledMain>
        <StyledTitle>Six Cities</StyledTitle>
        <LocationTabs />
        {hasOffers && (
          <StyledContent>
            <StyledContainer>
              <Offers />
              <StyledMap>map</StyledMap>
            </StyledContainer>
          </StyledContent>
        )}
        {!hasOffers && <NoAvailableOffers />}
      </StyledMain>
    </DefaultLayout>
  );
}

export { HomePage };

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
`;

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
