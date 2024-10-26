import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import { getAllOffers, getOfferById, Offer, OfferId } from '~/entities/offer';
import { DefaultLayout } from '~/shared/ui/DefaultLayout';
import { Footer } from '~/shared/ui/Footer';
import { Map, MarkerLocation } from '~/shared/ui/map';
import { Header } from '~/widgets/header';

import { AboutHost } from './AboutHost';
import { Amenities } from './Amenities';
import { Gallery } from './Gallery';
import { OfferSummary } from './OfferSummary';
import { OtherOffers } from './OtherOffers';
import { Reviews } from './Reviews';

const OFFER_NAME = 'Offer';

function OfferPage(): JSX.Element {
  const { offerId } = useParams<OfferId>();

  const [offer, setOffer] = useState<Offer | null>(null);
  const [isOfferLoading, setIsOfferLoading] = useState(false);
  const [offers, setOffers] = useState<Offer[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!offerId) return;

    const fetchOffers = async () => {
      setIsOfferLoading(true);
      const data = await getOfferById(offerId);
      setOffer(data);
      setIsOfferLoading(false);
    };

    fetchOffers();
  }, [offerId]);

  useEffect(() => {
    const fetchOffers = async () => {
      setIsLoading(true);
      const data = await getAllOffers();
      setOffers(data);
      setIsLoading(false);
    };

    fetchOffers();
  }, []);

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

  if (isOfferLoading) return <p>Loading...</p>;
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
          <Gallery imageUrls={offerImages} />
          <StyledWrapper>
            <OfferSummary
              propertyType={propertyType}
              roomsCount={roomsCount}
              guestsCount={guestsCount}
              rentalPrice={rentalPrice}
              rating={rating}
              title={title}
              isFavorite={isFavorite}
              isPremium={isPremium}
            />
            <Amenities items={amenities} />
            <AboutHost
              avatarUrl={host.avatarUrl}
              hostName={host.name}
              offerDescription={description}
              userType={host.type}
            />
            <Reviews />
          </StyledWrapper>
          <StyledMap mapCenter={mapCenter} markerLocations={markerLocations} />
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

const StyledMap = styled(Map)`
  width: 100%;
  height: 579px;
  margin-bottom: 50px;
`;

const StyledOtherOffers = styled(OtherOffers)`
  padding-bottom: 50px;
`;