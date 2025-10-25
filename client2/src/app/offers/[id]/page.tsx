import { JSX } from 'react';

import { offerApiService } from '~/entities/offer';
import { cn } from '~/shared/lib/css';
import { Params } from '~/shared/lib/next';
import { defaultLayoutClasses } from '~/shared/ui/css';
import { Gallery } from '~/shared/ui/molecules';
import { Header } from '~/widget/header';

import { OfferSummarySection } from './ui/offer-summary-section';

type OfferPageProps = {
  params: Promise<Params<'id'>>;
};

export default async function OfferPage({
  params,
}: OfferPageProps): Promise<JSX.Element> {
  const { id } = await params;
  const {
    amenities,
    guestsCount,
    isFavorite,
    isPremium,
    propertyType,
    rating,
    rentalPrice,
    roomsCount,
    title,
    offerImages,
  } = await offerApiService.getById(id);

  return (
    <div className={cn(defaultLayoutClasses)}>
      <Header />
      <main>
        <Gallery className={galleryClasses} imageUrls={offerImages} />
        <OfferSummarySection
          amenities={amenities}
          guestsCount={guestsCount}
          isFavorite={isFavorite}
          isPremium={isPremium}
          propertyType={propertyType}
          rating={rating}
          rentalPrice={rentalPrice}
          roomsCount={roomsCount}
          title={title}
        />
      </main>
    </div>
  );
}

const galleryClasses = cn('mb-7');
