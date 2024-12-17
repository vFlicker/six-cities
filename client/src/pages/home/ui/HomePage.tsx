import styled from '@emotion/styled';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSearchParams } from 'react-router-dom';

import { fetchOffersByCityName, offerModel } from '~/entities/offer';
import { useAppDispatch, useAppSelector } from '~/shared/libs/state';
import { DEFAULT_CITY } from '~/shared/router';
import { Color } from '~/shared/theme/colors';
import { DefaultLayout } from '~/shared/ui/DefaultLayout';
import { VisuallyHiddenMixin } from '~/shared/ui/VisuallyHiddenMixin';
import { Header } from '~/widgets/header';

import { AvailableOffers } from './AvailableOffers';
import { LocationTabs } from './LocationTabs';
import { NoAvailableOffers } from './NoAvailableOffers';

function HomePage(): JSX.Element {
  const dispatch = useAppDispatch();

  const offersByCityName = useAppSelector(offerModel.getOffersByCityName);
  const isLoading = useAppSelector(offerModel.getIsOffersByCityNameLoading);

  const [searchParams, setSearchParams] = useSearchParams();

  const cityName = searchParams.get('cityName');

  useEffect(() => {
    if (!cityName) setSearchParams({ cityName: DEFAULT_CITY });
  }, [cityName, setSearchParams]);

  useEffect(() => {
    if (cityName) dispatch(fetchOffersByCityName(cityName));
  }, [dispatch, cityName]);

  const hasOffers = offersByCityName.length > 0;
  if (isLoading) return <p>Loading...</p>;

  return (
    <DefaultLayout>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <StyledHeader />
      <StyledMain>
        <StyledTitle>Six Cities</StyledTitle>
        <LocationTabs />
        {!hasOffers && <NoAvailableOffers />}
        {hasOffers && <AvailableOffers offers={offersByCityName} />}
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
