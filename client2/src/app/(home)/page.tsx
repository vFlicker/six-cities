import { JSX, Suspense } from 'react';

import { offerApiService, OfferList } from '~/entities/offer';
import { CityFilter, getCityFromSearchParams } from '~/features/filter-by-city';
import { cn } from '~/shared/lib/css';
import { SearchParams } from '~/shared/lib/next';
import { Loader } from '~/shared/ui/atoms';
import { container, defaultLayoutClasses } from '~/shared/ui/css';
import { Header } from '~/widget/header';
import { OfferMap } from '~/widget/offer-map';

type HomePageProps = {
  searchParams: Promise<SearchParams>;
};

export default async function HomePage({
  searchParams,
}: HomePageProps): Promise<JSX.Element> {
  const params = await searchParams;
  const city = getCityFromSearchParams(params);

  return (
    <div className={containerClasses}>
      <Header className={headerClasses} />
      <CityFilter />
      <main className={mainClasses}>
        <Suspense fallback={<Loader size="lg" />}>
          <Offers city={city} />
        </Suspense>
      </main>
    </div>
  );
}

async function Offers({ city }: { city: string }): Promise<JSX.Element> {
  const offers = await offerApiService.getAllForCity(city);

  return (
    <div className={offersWrapperClasses}>
      <div className={offersContainerClasses}>
        <OfferList className={offerListClasses} offers={offers} />
        <OfferMap className={offerMapClasses} />
      </div>
    </div>
  );
}

const containerClasses = cn(defaultLayoutClasses, 'flex h-screen flex-col');
const headerClasses = cn('bg-gray-10');
const mainClasses = cn('flex h-full items-center justify-center');
const offersWrapperClasses = cn('flex h-full overflow-y-hidden pt-8');

const offersContainerClasses = cn(
  container.lg,
  'grid w-full grid-cols-[1fr_512px]',
);

const offerListClasses = cn('overflow-y-scroll');
const offerMapClasses = cn('ml-auto');
