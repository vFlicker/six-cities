import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSearchParams } from 'react-router-dom';

import { getAllOffersByCityName, Offer } from '~/entities/offer';
import { DEFAULT_CITY } from '~/shared/router';
import { Color } from '~/shared/theme/colors';
import { DefaultLayout } from '~/shared/ui/DefaultLayout';
import { VisuallyHiddenMixin } from '~/shared/ui/VisuallyHiddenMixin';
import { Header } from '~/widgets/header';

import { AvailableOffers } from './AvailableOffers';
import { LocationTabs } from './LocationTabs';
import { NoAvailableOffers } from './NoAvailableOffers';

function HomePage(): JSX.Element {
  const [searchParams, setSearchParams] = useSearchParams();

  const [offers, setOffers] = useState<Offer[]>([]);
  const [isLoading, setIsLoading] = useState(false);

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
  if (isLoading) return <p>Loading...</p>;

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
        {hasOffers && <AvailableOffers offers={offers} />}
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
