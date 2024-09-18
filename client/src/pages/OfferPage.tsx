import styled from '@emotion/styled';
import { Helmet } from 'react-helmet-async';

import { AboutHost } from '~/sections/AboutHost';
import { Amenities } from '~/sections/Amenities';
import { Gallery } from '~/sections/Gallery';
import { OfferSummary } from '~/sections/OfferSummary';
import { OtherOffers } from '~/sections/OtherOffers';
import { Reviews } from '~/sections/Reviews';
import { Color } from '~/tokens/colors';

const OFFER_NAME = 'Offer';

function OfferPage(): JSX.Element {
  return (
    <main>
      <Helmet>
        <title>{OFFER_NAME}</title>
      </Helmet>

      <StyledOffer>
        <Gallery />
        <StyledWrapper>
          <OfferSummary />
          <Amenities />
          <AboutHost userType="pro" />
          <Reviews />
        </StyledWrapper>
        <StyledMap />
        <StyledOtherOffers />
      </StyledOffer>
    </main>
  );
}

export { OfferPage };

const StyledOffer = styled.section``;

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
