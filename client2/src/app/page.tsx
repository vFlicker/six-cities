import { JSX } from 'react';

import { CityFilter } from '~/features/filter-by-city';
import { defaultLayoutClasses } from '~/shared/css';
import { cn } from '~/shared/lib/css';
import { Header } from '~/widget/header';

export default function HomePage(): JSX.Element {
  return (
    <div className={cn(`${defaultLayoutClasses}`)}>
      <Header className={cn('bg-gray-10')} />
      <div className={cn('flex h-full flex-col overflow-y-hidden')}>
        <CityFilter />
      </div>
    </div>
  );
}
