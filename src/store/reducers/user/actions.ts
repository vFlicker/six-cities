import { createAction } from '@reduxjs/toolkit';

import { AppRoute } from '@/types';

export const redirectToRoute = createAction(
  'userData/redirectToRoute',
  (url: AppRoute) => ({ payload: url }),
);
