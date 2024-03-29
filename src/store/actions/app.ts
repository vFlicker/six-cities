import { createAction } from '@reduxjs/toolkit';

import { AppRoute, Reducer } from '~/constants';

export const REDIRECT_TO_ROUTE = `${Reducer.App}/redirectToRoute`;

export const redirectToRoute = createAction<AppRoute>(REDIRECT_TO_ROUTE);
