import Image from 'next/image';
import Link from 'next/link';
import { JSX } from 'react';

import { cn } from '~/shared/lib/css';
import { AppRoute } from '~/shared/lib/router';
import { Rating } from '~/shared/ui/atoms';

import { Offer } from '../../../model';

type Variant = 'vertical' | 'horizontal';

type OfferCardProps = {
  offer: Offer;
  variant: Variant;
  actionSlot?: JSX.Element;
  className?: string;
};

const PREVIEW_IMAGE_URL = '/mock/apartment-02.jpg';

export function OfferCard({
  className,
  offer,
  variant,
  actionSlot,
}: OfferCardProps): JSX.Element {
  const { id, title, rentalPrice, rating, propertyType } = offer;

  const isVertical = variant === 'vertical';

  return (
    <article className={cn(getWrapperClasses(variant), className)}>
      <Image
        src={PREVIEW_IMAGE_URL}
        alt={title}
        width={isVertical ? 260 : 150}
        height={isVertical ? 200 : 110}
        className={cn(getImageClasses(variant), className)}
      />

      <div className={infoWrapperClasses}>
        <div className={priceWrapperClasses}>
          <div className={priceClasses}>
            <b className={priceValueClasses}>€{rentalPrice}</b>
            <span className={priceTextClasses}>&nbsp;/night</span>
          </div>
          {actionSlot}
        </div>

        <Rating className={ratingClasses} size="small" value={rating} />

        <Link href={`${AppRoute.Offers}/${id}`} className={linkClasses}>
          {title}
        </Link>
        <p className={propertyTypeClasses}>{propertyType}</p>
      </div>
    </article>
  );
}

const infoWrapperClasses = cn('flex flex-grow flex-col');
const priceWrapperClasses = cn('mb-1 flex items-start justify-between');
const priceClasses = cn('text-gray-90');
const priceValueClasses = cn('mr-1 text-xl leading-tight font-bold');
const priceTextClasses = cn('text-sm');
const ratingClasses = cn('mb-2');
const linkClasses = cn('mb-1 text-lg leading-5 font-bold hover:opacity-60');
const propertyTypeClasses = cn('text-gray-70 text-xs');

const getWrapperClasses = (variant: Variant): string => {
  const classes = {
    ['vertical']: 'w-65 flex-col',
    ['horizontal']: 'w-105 flex-row',
  };

  return cn('relative flex', classes[variant]);
};

const getImageClasses = (variant: Variant): string => {
  const classes = {
    ['vertical']: 'mb-2 h-50 w-full',
    ['horizontal']: 'mr-4 h-27 w-37 flex-row',
  };

  return cn('rounded object-cover', classes[variant]);
};
