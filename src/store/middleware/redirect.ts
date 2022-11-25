import { Middleware } from 'redux';

import { State } from '~/types';

import { browserHistory } from '../../browser-history';
import { REDIRECT_TO_ROUTE } from '../actions/app';

export const redirect: Middleware<unknown, State> =
  () => (next) => (action) => {
    if (action.type === REDIRECT_TO_ROUTE) {
      browserHistory.push(action.payload);
    }

    return next(action);
  };
