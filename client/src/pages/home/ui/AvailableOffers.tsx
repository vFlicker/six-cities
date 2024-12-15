import styled from '@emotion/styled';
import { useState } from 'react';

import { Offer } from '~/entities/offer';
import { Container } from '~/shared/ui/Container';
import { MarkerLocation } from '~/shared/ui/map';
import { Map } from '~/shared/ui/map';

import { Offers } from './Offers';

type AvailableOffersProps = {
  className?: string;
  offers: Offer[];
};

function AvailableOffers({
  className,
  offers,
}: AvailableOffersProps): JSX.Element {
  const [activeOfferId, setActiveOfferId] = useState<string>();

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
    <StyledContent className={className}>
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
  );
}

export { AvailableOffers };

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
