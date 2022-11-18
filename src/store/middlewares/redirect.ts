import { Middleware } from 'redux';

import { RootState } from '~/types';
import { browserHistory } from '~/utils';

import { REDIRECT_TO_ROUTE_TYPE } from '../actions/app';

export const redirect: Middleware<unknown, RootState> =
  () => (next) => (action) => {
    if (action.type === REDIRECT_TO_ROUTE_TYPE) {
      browserHistory.push(action.payload);
    }

    return next(action);
  };
