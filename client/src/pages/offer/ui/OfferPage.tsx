import styled from '@emotion/styled';
import { Helmet } from 'react-helmet-async';

import { useOffer, useOffers } from '~/entities/offer';
import { DefaultLayout } from '~/shared/ui/DefaultLayout';
import { Footer } from '~/shared/ui/Footer';
import { Map, MarkerLocation } from '~/shared/ui/map';
import { Header } from '~/widgets/header';

import { AboutHostSection } from './AboutHostSection';
import { AmenitiesSection } from './AmenitiesSection';
import { GallerySection } from './GallerySection';
import { OfferSummarySection } from './OfferSummarySection';
import { OtherOffersSection } from './OtherOffersSection';
import { ReviewsSection } from './ReviewsSection';

const OFFER_NAME = 'Offer';

function OfferPage(): JSX.Element {
  const { offer, isOfferPending } = useOffer();
  const { offers, isOffersPending } = useOffers();

  const hasOffers = offers && offers.length > 0;
  if (isOffersPending || !hasOffers) return <p>Loading...</p>;

  // TODO: add current active city to the state,
  // and use it to set the map center
  const { latitude, longitude } = offers[0].city.location;
  const mapCenter = [latitude, longitude] as [number, number];

  const markerLocations: MarkerLocation[] = offers.map(({ id, location }) => ({
    id,
    location: [location.latitude, location.longitude],
  }));

  if (isOfferPending) return <p>Loading...</p>;
  if (!offer) return <p>Offer not found</p>;

  const {
    offerImages,
    amenities,
    host,
    description,
    propertyType,
    roomsCount,
    guestsCount,
    rentalPrice,
    rating,
    title,
    isFavorite,
    isPremium,
  } = offer;

  return (
    <DefaultLayout>
      <Helmet>
        <title>{OFFER_NAME}</title>
      </Helmet>
      <Header />
      <main>
        <section>
          <GallerySection imageUrls={offerImages} />
          <StyledWrapper>
            <OfferSummarySection
              propertyType={propertyType}
              roomsCount={roomsCount}
              guestsCount={guestsCount}
              rentalPrice={rentalPrice}
              rating={rating}
              title={title}
              isFavorite={isFavorite}
              isPremium={isPremium}
            />
            <AmenitiesSection items={amenities} />
            <AboutHostSection
              avatarUrl={host.avatarUrl}
              hostName={host.name}
              offerDescription={description}
              userType={host.type}
            />
            <ReviewsSection />
          </StyledWrapper>
          <StyledMap mapCenter={mapCenter} markerLocations={markerLocations} />
          <StyledOtherOffersSection />
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

const StyledMap = styled(Map)`
  width: 100%;
  height: 579px;
  margin-bottom: 50px;
`;

const StyledOtherOffersSection = styled(OtherOffersSection)`
  padding-bottom: 50px;
`;
