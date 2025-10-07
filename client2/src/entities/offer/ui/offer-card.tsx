import Image from 'next/image';
import { JSX } from 'react';

import { cn } from '~/shared/lib/css';
import { Rating } from '~/shared/ui/atoms';

type Variant = 'vertical' | 'horizontal';

type OfferCardProps = {
  id: string;
  title: string;
  price: number;
  rating: number;
  imageUrl: string;
  propertyType: string;
  variant: Variant;
  actionSlot?: JSX.Element;
  className?: string;
};

export function OfferCard({
  className,
  title,
  price,
  rating,
  imageUrl,
  propertyType,
  variant,
  actionSlot,
}: OfferCardProps): JSX.Element {
  const isVertical = variant === 'vertical';

  return (
    <article
      className={cn(
        'relative flex',
        isVertical ? 'w-65 flex-col' : 'w-105 flex-row',
        className,
      )}
    >
      <Image
        src={imageUrl}
        alt={title}
        width={isVertical ? 260 : 150}
        height={isVertical ? 200 : 110}
        className={cn(
          'rounded object-cover',
          isVertical ? 'mb-2 h-50 w-full' : 'mr-4 h-27 w-37 flex-row',
          className,
        )}
      />

      <div className={cn('flex flex-grow flex-col')}>
        <div className={cn('mb-1 flex items-start justify-between')}>
          <div className={cn('text-gray-90')}>
            <b className={cn('mr-1 text-xl leading-tight font-bold')}>
              €{price}
            </b>
            <span className={cn('text-xs')}>&nbsp;/night</span>
          </div>
          {actionSlot}
        </div>

        <Rating className={cn('mb-2')} size="small" value={rating} />

        <a
          href="#"
          className={cn('mb-1 text-lg leading-5 font-bold hover:opacity-60')}
        >
          {title}
        </a>
        <p className={cn('text-gray-70 text-xs')}>{propertyType}</p>
      </div>
    </article>
  );
}
