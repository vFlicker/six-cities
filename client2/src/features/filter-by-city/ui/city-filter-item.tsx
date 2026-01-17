'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { JSX, useCallback } from 'react';

import { cn } from '~/shared/lib/css';
import { SlantedLink } from '~/shared/ui/atoms';

import { DEFAULT_CITY } from '../config/filter-by-city-config';

type CityFilterItemProps = {
  className?: string;
  city: string;
};

export function CityFilterItem({
  className,
  city,
}: CityFilterItemProps): JSX.Element {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      return params.toString();
    },
    [searchParams],
  );

  const currentCity = searchParams.get('city') || DEFAULT_CITY;

  return (
    <SlantedLink
      className={cn(className)}
      href={`${pathname}?${createQueryString('city', city)}`}
      isActive={city === currentCity}
    >
      {city}
    </SlantedLink>
  );
}
