import styled from '@emotion/styled';
import { Helmet } from 'react-helmet-async';

import { Color } from '~/shared/tokens/colors';
import { DefaultLayout } from '~/shared/ui/DefaultLayout';
import { Footer } from '~/shared/ui/Footer';
import { Header } from '~/widgets/header';

import { AboutHost } from './AboutHost';
import { Amenities } from './Amenities';
import { Gallery } from './Gallery';
import { OfferSummary } from './OfferSummary';
import { OtherOffers } from './OtherOffers';
import { Reviews } from './Reviews';

const OFFER_NAME = 'Offer';

function OfferPage(): JSX.Element {
  return (
    <DefaultLayout>
      <Helmet>
        <title>{OFFER_NAME}</title>
      </Helmet>
      <Header />
      <main>
        <section>
          <Gallery />
          <StyledWrapper>
            <OfferSummary />
            <Amenities />
            <AboutHost userType="pro" />
            <Reviews />
          </StyledWrapper>
          <StyledMap />
          <StyledOtherOffers />
        </section>
      </main>
      <Footer />
    </DefaultLayout>
  );
}

export { OfferPage };

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 52px;
  margin-bottom: 50px;
`;

const StyledMap = styled.section`
  width: 100%;
  height: 579px;
  background-color: ${Color.BLUE_20};
  margin-bottom: 50px;
`;

const StyledOtherOffers = styled(OtherOffers)`
  padding-bottom: 50px;
`;
