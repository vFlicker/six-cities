import { Middleware } from 'redux';
import { camelizeKeys } from 'humps';

import { State } from '~/types';

export const normalizePayload: Middleware<unknown, State> =
  () => (next) => (action) => {
    if (action.meta?.requestStatus === 'fulfilled' && action.payload) {
      const payload = camelizeKeys(action.payload);
      const actionWithNormalizedPayload = { ...action, payload };
      return next(actionWithNormalizedPayload);
    }

    return next(action);
  };
