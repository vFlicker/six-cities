import { EntityState } from '@reduxjs/toolkit';

import { ApiError } from '~/shared/api';
import { CityName, Hotel } from '~/shared/types/hotel';

export type Sort = 'popular' | 'priceLow' | 'priceHigh' | 'topRated';

export type HotelsState = {
  hotels: EntityState<Hotel>;
  queryConfig: {
    filter: CityName;
    sort: Sort;
  };
  loading: boolean;
  error: ApiError | null;
};
