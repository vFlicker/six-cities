import { Middleware } from 'redux';
import { camelizeKeys } from 'humps';

import { RootState } from '~/types';

export const normalizePayload: Middleware<unknown, RootState> =
  () => (next) => (action) => {
    if (action.meta?.requestStatus === 'fulfilled' && action.payload) {
      const payload = camelizeKeys(action.payload);
      const actionWithNormalizedPayload = { ...action, payload };
      return next(actionWithNormalizedPayload);
    }

    return next(action);
  };
