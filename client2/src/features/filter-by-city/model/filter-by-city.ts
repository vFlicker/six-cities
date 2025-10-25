import { SearchParams } from '~/shared1/lib/next';

import { CITIES, DEFAULT_CITY } from '../config/filter-by-city-config';

export const CITY_QUERY_PARAM = 'city';

export const getCityFromSearchParams = (searchParams: SearchParams): string => {
  const city = searchParams[CITY_QUERY_PARAM];

  if (typeof city === 'string' && CITIES.includes(city)) {
    return city;
  }

  return DEFAULT_CITY;
};
