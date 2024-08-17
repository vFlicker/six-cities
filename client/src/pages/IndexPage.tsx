import styled from '@emotion/styled';
import { Helmet } from 'react-helmet-async';

import { Container } from '~/helpers/Container';
import { VisuallyHiddenMixin } from '~/helpers/VisuallyHiddenMixin';
import { LocationTabs } from '~/sections/LocationTabs';
import { Offers } from '~/sections/Offers';
import { Color } from '~/tokens/colors';

function IndexPage(): JSX.Element {
  return (
    <StyledIndexPage>
      <Helmet>
        <title>Home page</title>
      </Helmet>
      <StyledTitle>Six Cities</StyledTitle>
      <LocationTabs />
      <StyledContent>
        <StyledContainer>
          <Offers />
          <StyledMap>map</StyledMap>
        </StyledContainer>
      </StyledContent>
    </StyledIndexPage>
  );
}

export { IndexPage };

const StyledIndexPage = styled.main``;

const StyledTitle = styled.h1`
  ${VisuallyHiddenMixin}
`;

const StyledContent = styled.div`
  padding: 32px 0;
  background-color: ${Color.WHITE};
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
