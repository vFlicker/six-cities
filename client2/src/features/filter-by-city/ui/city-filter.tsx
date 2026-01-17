import { JSX } from 'react';

import { cn } from '~/shared/lib/css';
import { container } from '~/shared/ui/css';

import { CITIES } from '../config/filter-by-city-config';
import { CityFilterItem } from './city-filter-item';

type CityFilterProps = {
  className?: string;
};

export function CityFilter({ className }: CityFilterProps): JSX.Element {
  return (
    <div className={cn(wrapperClasses, className)}>
      <div className={containerClasses}>
        <div className={listClasses}>
          {CITIES.map((city) => {
            return (
              <li key={city} className={itemClasses}>
                <CityFilterItem city={city} />
              </li>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const wrapperClasses = cn('bg-gray-10');
const containerClasses = cn(container.lg, 'px-10 pt-4 pb-12');
const listClasses = cn('flex flex-wrap items-start gap-9');
const itemClasses = cn('flex');
