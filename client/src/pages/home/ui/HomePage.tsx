import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';

import { getAllOffers, Offer } from '~/entities/offer';
import { Color } from '~/shared/theme/colors';
import { Container } from '~/shared/ui/Container';
import { DefaultLayout } from '~/shared/ui/DefaultLayout';
import { LatLngTuple, Map } from '~/shared/ui/Map';
import { VisuallyHiddenMixin } from '~/shared/ui/VisuallyHiddenMixin';
import { Header } from '~/widgets/header';

import { LocationTabs } from './LocationTabs';
import { NoAvailableOffers } from './NoAvailableOffers';
import { Offers } from './Offers';

const hasOffers = true;

function HomePage(): JSX.Element {
  const [offers, setOffers] = useState<Offer[]>(null!);

  useEffect(() => {
    getAllOffers().then((data) => {
      setOffers(data);
    });
  }, []);

  if (!offers) {
    return <p>Loading...</p>;
  }

  const letLng: LatLngTuple = [
    offers[0].location.latitude,
    offers[0].location.longitude,
  ];
  const markers: LatLngTuple[] = offers.map(
    ({ location }) => [location.latitude, location.longitude] as LatLngTuple,
  );

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
              <StyledOffers offers={offers} />
              <Map letLng={letLng} markers={markers} />
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
  overflow-y: hidden;
`;

const StyledHeader = styled(Header)`
  background-color: ${Color.GRAY_10};
`;

const StyledTitle = styled.h1`
  ${VisuallyHiddenMixin}
`;

const StyledContent = styled.div`
  display: flex;
  padding: 32px 0 0;
  overflow-y: hidden;
`;

const StyledContainer = styled(Container)`
  display: flex;
`;

const StyledOffers = styled(Offers)`
  flex-shrink: 0;
  overflow-y: scroll;
  padding-right: 20px;
`;
