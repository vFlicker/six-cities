import { PayloadAction } from '@reduxjs/toolkit';
import { Middleware } from 'redux';

import { browserHistory } from '~/shared/libs/router';

import { REDIRECT_TO_ROUTE } from '../model/authActions';

export const redirectMiddleware: Middleware<unknown, RootState> =
  () => (next) => (action) => {
    const typedAction = action as PayloadAction<string>;

    if (typedAction.type === REDIRECT_TO_ROUTE) {
      browserHistory.push(typedAction.payload);
    }

    return next(action);
  };
