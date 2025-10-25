import React, { JSX } from 'react';

import { cn } from '~/shared/lib/css';

type OfferMapProps = {
  className?: string;
};

export function OfferMap({ className }: OfferMapProps): JSX.Element {
  return (
    <div className={cn(wrapperClasses, className)}>
      <h2>Map of Offers</h2>
    </div>
  );
}

const wrapperClasses = cn(
  'flex h-full w-full items-center justify-center bg-gray-200',
);
