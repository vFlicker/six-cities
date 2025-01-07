import { createAction } from '@reduxjs/toolkit';

import { AppRoute } from '~/shared/libs/router';
import { StoreSlice } from '~/shared/libs/state';

export const REDIRECT_TO_ROUTE = `${StoreSlice.Auth}/redirectToRoute`;

export const redirectToRoute = createAction<AppRoute>(
  `${StoreSlice.Auth}/redirectToRoute`,
);
