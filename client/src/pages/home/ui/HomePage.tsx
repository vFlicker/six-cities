import styled from '@emotion/styled';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSearchParams } from 'react-router-dom';

import { useOffersForCity } from '~/entities/offer';
import { CityFilter } from '~/features/cityFilter';
import { DEFAULT_CITY } from '~/shared/libs/router';
import { Color } from '~/shared/theme/colors';
import { DefaultLayout } from '~/shared/ui/DefaultLayout';
import { Loader } from '~/shared/ui/Loader';
import { VisuallyHiddenMixin } from '~/shared/ui/VisuallyHiddenMixin';
import { Header } from '~/widgets/header';

import { AvailableOffers } from './AvailableOffers';
import { NoAvailableOffers } from './NoAvailableOffers';

function HomePage(): JSX.Element {
  const [searchParams, setSearchParams] = useSearchParams();

  const cityName = searchParams.get('cityName');

  useEffect(() => {
    if (!cityName) setSearchParams({ cityName: DEFAULT_CITY });
  }, [cityName, setSearchParams]);

  const { offersForCity, isOffersForCityPending } = useOffersForCity();
  const hasOffers = offersForCity && offersForCity.length > 0;
  if (isOffersForCityPending) return <Loader />;

  return (
    <DefaultLayout>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <StyledHeader />
      <StyledMain>
        <StyledTitle>Six Cities</StyledTitle>
        <CityFilter />
        {!hasOffers && <NoAvailableOffers />}
        {hasOffers && <AvailableOffers offers={offersForCity} />}
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
