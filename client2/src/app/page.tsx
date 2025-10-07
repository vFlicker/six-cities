import { JSX } from 'react';

import { CityFilter } from '~/features/filter-by-city';
import { containerClasses, defaultLayoutClasses } from '~/shared/css';
import { cn } from '~/shared/lib/css';
import { Header } from '~/widget/header';
import { OfferList } from '~/widget/offer-list';
import { OfferMap } from '~/widget/offer-map';

export default function HomePage(): JSX.Element {
  return (
    <div className={cn(`${defaultLayoutClasses} flex h-screen flex-col`)}>
      <Header className={cn('bg-gray-10')} />
      <CityFilter />

      <div className={cn('flex h-full overflow-y-hidden pt-8')}>
        <div
          className={cn(
            `${containerClasses.lg} grid w-full grid-cols-[1fr_512px]`,
          )}
        >
          <OfferList className={cn('overflow-y-scroll')} />
          <OfferMap className={cn('ml-auto')} />
        </div>
      </div>
    </div>
  );
}
