import { EntityState } from '@reduxjs/toolkit';

import { ApiError } from '~/shared/api';
import { Hotel } from '~/shared/types/hotel';

export type State = {
  hotels: EntityState<Hotel>;
  loading: boolean;
  error: ApiError | null;
};
