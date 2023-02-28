import { EntityState } from '@reduxjs/toolkit';

import { ApiError } from '~/shared/api';
import { CityName, Hotel } from '~/shared/types/hotel';

export type State = {
  hotels: EntityState<Hotel>;
  queryConfig: {
    filter: CityName;
  };
  loading: boolean;
  error: ApiError | null;
};
