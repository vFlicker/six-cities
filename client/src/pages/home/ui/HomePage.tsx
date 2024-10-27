import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSearchParams } from 'react-router-dom';

import { getAllOffersByCityName, Offer } from '~/entities/offer';
import { DEFAULT_CITY } from '~/shared/router';
import { Color } from '~/shared/theme/colors';
import { Container } from '~/shared/ui/Container';
import { DefaultLayout } from '~/shared/ui/DefaultLayout';
import { Map, MarkerLocation } from '~/shared/ui/map';
import { VisuallyHiddenMixin } from '~/shared/ui/VisuallyHiddenMixin';
import { Header } from '~/widgets/header';

import { LocationTabs } from './LocationTabs';
import { NoAvailableOffers } from './NoAvailableOffers';
import { Offers } from './Offers';

function HomePage(): JSX.Element {
  const [searchParams, setSearchParams] = useSearchParams();

  const [offers, setOffers] = useState<Offer[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [activeOfferId, setActiveOfferId] = useState<string>();

  const cityName = searchParams.get('cityName');

  useEffect(() => {
    if (!cityName) setSearchParams({ cityName: DEFAULT_CITY });
  }, [cityName, setSearchParams]);

  useEffect(() => {
    const fetchOffers = async () => {
      if (!cityName) return;

      setIsLoading(true);
      const data = await getAllOffersByCityName(cityName);
      setOffers(data);
      setIsLoading(false);
    };

    fetchOffers();
  }, [cityName]);

  const hasOffers = offers.length > 0;
  if (isLoading || !hasOffers) return <p>Loading...</p>;

  // TODO: add current active city to the state,
  // and use it to set the map center
  const { latitude, longitude } = offers[0].city.location;
  const mapCenter = [latitude, longitude] as [number, number];

  const markerLocations: MarkerLocation[] = offers.map(({ id, location }) => ({
    id,
    location: [location.latitude, location.longitude],
  }));

  const handleCardMouseEnter = (offerId: string): void => {
    setActiveOfferId(offerId);
  };

  const handleCardMouseLeave = (): void => {
    setActiveOfferId(undefined);
  };

  return (
    <DefaultLayout>
      <Helmet>
        <title>Home page</title>
      </Helmet>
      <StyledHeader />
      <StyledMain>
        <StyledTitle>Six Cities</StyledTitle>
        <LocationTabs />
        {!hasOffers && <NoAvailableOffers />}
        {hasOffers && (
          <StyledContent>
            <StyledContainer>
              <StyledOffers
                offers={offers}
                onCardMouseEnter={handleCardMouseEnter}
                onCardMouseLeave={handleCardMouseLeave}
              />
              <StyledMap
                mapCenter={mapCenter}
                markerLocations={markerLocations}
                activeMarkerId={activeOfferId}
              />
            </StyledContainer>
          </StyledContent>
        )}
      </StyledMain>
    </DefaultLayout>
  );
}

export { HomePage };

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
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
  height: 100%;
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

const StyledMap = styled(Map)`
  flex-grow: 1;
  height: 100%;
`;
