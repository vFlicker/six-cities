'use client';

import { useSearchParams } from 'next/navigation';
import { JSX } from 'react';

import { cn } from '~/shared/lib/css';
import { SlantedLink } from '~/shared/ui/atoms';
import { container } from '~/shared/ui/css';

import { CITIES, DEFAULT_CITY } from '../config/filter-by-city-config';

type CityFilterProps = {
  className?: string;
};

export function CityFilter({ className }: CityFilterProps): JSX.Element {
  const searchParams = useSearchParams();
  const currentCity = searchParams.get('city') || DEFAULT_CITY;
  const params = new URLSearchParams(searchParams);

  return (
    <div className={cn(wrapperClasses, className)}>
      <div className={containerClasses}>
        <div className={listClasses}>
          {CITIES.map((city) => {
            params.set('city', city);

            return (
              <li key={city} className={itemClasses}>
                <SlantedLink
                  href={`?${params.toString()}`}
                  isActive={city === currentCity}
                >
                  {city}
                </SlantedLink>
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
