import styled from '@emotion/styled';
import { Helmet } from 'react-helmet-async';

import { AboutHost } from '~/sections/AboutHost';
import { Amenities } from '~/sections/Amenities';
import { Gallery } from '~/sections/Gallery';
import { OfferSummary } from '~/sections/OfferSummary';
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

        <div className="offer__container container">
          <StyledWrapper>
            <OfferSummary />
            <Amenities />
            <AboutHost userType="pro" />
            <Reviews />
          </StyledWrapper>
        </div>
        <section className="offer__map map"></section>
      </StyledOffer>
    </main>
  );
}

export { OfferPage };

const StyledOffer = styled.section`
  background-color: ${Color.WHITE};
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 52px;
`;
