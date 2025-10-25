import { JSX } from 'react';

import { offerApiService } from '~/entities/offer';
import { cn } from '~/shared/lib/css';
import { Params } from '~/shared/lib/next';
import { defaultLayoutClasses } from '~/shared/ui/css';
import { Gallery } from '~/shared/ui/molecules/Gallery';
import { Header } from '~/widget/header';

type OfferPageProps = {
  params: Promise<Params<'id'>>;
};

export default async function OfferPage({
  params,
}: OfferPageProps): Promise<JSX.Element> {
  const { id } = await params;
  const { offerImages } = await offerApiService.getById(id);

  return (
    <div className={cn(defaultLayoutClasses)}>
      <Header />
      <main>
        <Gallery imageUrls={offerImages} />
      </main>
    </div>
  );
}
