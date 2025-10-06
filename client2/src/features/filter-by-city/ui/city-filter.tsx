import { JSX } from 'react';

import { containerClasses } from '~/shared/css';
import { cn } from '~/shared/lib/css';
import { SlantedLink } from '~/shared/ui/atoms';

import { CITIES } from '../config/filter-by-city-config';

type CityFilterProps = {
  className?: string;
};

export function CityFilter({ className }: CityFilterProps): JSX.Element {
  return (
    <div className={cn('bg-gray-10', className)}>
      <div className={cn(`${containerClasses.lg}, px-1 pt-4 pb-12`)}>
        <div className={cn('flex flex-wrap items-start gap-9')}>
          {CITIES.map((name, index) => (
            <li key={name} className={cn('flex')}>
              <SlantedLink href="#" active={index === 3}>
                {name}
              </SlantedLink>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
}
