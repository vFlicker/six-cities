import { CityName } from '~/shared/types/hotel';

import { Sort } from './types';

export const DEFAULT_FILTER: CityName = 'Paris';
export const DEFAULT_SORT: Sort = 'popular';

export const cityFilters: Set<CityName> = new Set([
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
]);

export const citySort: Record<Sort, string> = {
  popular: 'Popular',
  priceLow: 'Price: low to high',
  priceHigh: 'Price: high to low',
  topRated: 'Top rated first',
};
