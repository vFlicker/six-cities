import { JSX } from 'react';

import { cn } from '~/shared/lib/css';
import { Chip } from '~/shared/ui/atoms';
import { Rating } from '~/shared/ui/atoms/Rating';
import { containerClasses } from '~/shared/ui/css';
import {
  AdultsIcon,
  BedroomsIcon,
  BookmarkIcon,
  PlaceIcon,
} from '~/shared/ui/icons';

type OfferSummarySectionProps = {
  title: string;
  amenities: string[];
  rating: number;
  propertyType: string;
  guestsCount: number;
  rentalPrice: number;
  roomsCount: number;
  isFavorite: boolean;
  isPremium: boolean;
  className?: string;
};

function ToggleBookmark({
  isActive,
  className,
}: {
  isActive: boolean;
  className?: string;
}): JSX.Element {
  return (
    <button type="button" className={className}>
      <BookmarkIcon className={cn('h-8 w-8')} />
    </button>
  );
}

export function OfferSummarySection({
  className,
  amenities,
  propertyType,
  roomsCount,
  guestsCount,
  rentalPrice,
  rating,
  title,
  isPremium,
  isFavorite,
}: OfferSummarySectionProps): JSX.Element {
  return (
    <section className={cn(offerSummarySectionClasses, className)}>
      {isPremium && <Chip size="large" />}
      <div className={headerWrapperClasses}>
        <h1 className={titleClasses}>{title}</h1>
        <ToggleBookmark
          className={toggleBookmarkClasses}
          isActive={isFavorite}
        />
      </div>

      <div className={ratingWrapperClasses}>
        <Rating size="large" value={rating} />
        <span className={ratingTextClasses}>{rating}</span>
      </div>

      <ul className={featureListClasses}>
        <li className={featureItemClasses}>
          <PlaceIcon />
          <span className={featureTextClasses}>{propertyType}</span>
        </li>
        <li className={featureItemClasses}>
          <BedroomsIcon />
          <span className={featureTextClasses}>{roomsCount} bedrooms</span>
        </li>
        <li className={featureItemClasses}>
          <AdultsIcon />
          <span className={featureTextClasses}>Max {guestsCount} adults</span>
        </li>
      </ul>

      <div className={priceWrapperClasses}>
        <div className={lineLeftLineClasses} />
        <b className={priceValueClasses}>€{rentalPrice}</b>
        <span className={priceTextClasses}>&nbsp;night</span>
        <div className={lineRightLineClasses} />
      </div>

      <ul className={amenitiesListClasses}>
        {amenities.map((amenity) => (
          <li key={amenity} className={amenitiesItemClasses}>
            {amenity}
          </li>
        ))}
      </ul>
    </section>
  );
}

const offerSummarySectionClasses = cn(
  containerClasses.lg,
  'flex flex-col items-center',
);

const headerWrapperClasses = cn(
  'relative mb-2 flex w-full items-center justify-center',
);

const titleClasses = cn(
  containerClasses.md,
  'text-gray-90 text-center text-4xl font-bold italic',
);

const toggleBookmarkClasses = cn('absolute top-0 right-0');

const ratingWrapperClasses = cn(
  containerClasses.md,
  'mb-6 flex items-center justify-center gap-1',
);

const ratingTextClasses = cn(
  'text-gray-90 relative top-0.5 text-2xl font-bold italic',
);

const featureListClasses = cn(
  containerClasses.md,
  'mb-9 flex justify-center gap-16',
);

const featureItemClasses = cn('flex items-baseline gap-1 text-base');
const featureTextClasses = cn('capitalize');

const priceWrapperClasses = cn('relative mb-14');

const lineCommonClasses = cn(
  'to-blue-20 absolute top-4 h-0.25 w-106 from-transparent',
);

const lineLeftLineClasses = cn(lineCommonClasses, 'left-full bg-gradient-to-l');

const lineRightLineClasses = cn(
  lineCommonClasses,
  'right-full bg-gradient-to-r',
);

const skewLinsClasses = cn(
  'after:bg-blue-20 after:absolute after:-top-2 after:-right-0.25 after:h-14 after:w-0.5 after:-skew-x-12',
);

const priceValueClasses = cn(
  skewLinsClasses,
  'relative pr-2 pl-4 text-3xl font-bold italic',
);

const priceTextClasses = cn(
  'pr-4 pl-0.5 text-lg leading-tight font-bold italic opacity-50',
);

const amenitiesListClasses = cn(
  containerClasses.md,
  'flex w-full flex-wrap items-start justify-between gap-2',
);

const listMarkerClasses = cn(
  'before:absolute before:top-3 before:left-0 before:h-px before:w-3 before:content-[""]',
);

const amenitiesItemClasses = cn(
  listMarkerClasses,
  'text-gray-90 before:bg-gray-90 relative w-full max-w-[176px] pl-5 text-base',
);
