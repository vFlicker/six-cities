import { JSX, Suspense } from 'react';

import { offerApiService, OfferList } from '~/entities/offer';
import { CityFilter, getCityFromSearchParams } from '~/features/filter-by-city';
import { cn } from '~/shared1/lib/css';
import { SearchParams } from '~/shared1/lib/next';
import { Loader } from '~/shared1/ui/atoms/Loader';
import { containerClasses, defaultLayoutClasses } from '~/shared1/ui/css';
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
    <div className={cn(`${defaultLayoutClasses} flex h-screen flex-col`)}>
      <Header className={cn('bg-gray-10')} />
      <CityFilter />
      <main className={cn(`flex h-full items-center justify-center`)}>
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
    <div className={cn('flex h-full overflow-y-hidden pt-8')}>
      <div
        className={cn(
          `${containerClasses.lg} grid w-full grid-cols-[1fr_512px]`,
        )}
      >
        <OfferList className={cn('overflow-y-scroll')} offers={offers} />
        <OfferMap className={cn('ml-auto')} />
      </div>
    </div>
  );
}
