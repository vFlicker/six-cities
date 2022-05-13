import { Middleware } from 'redux';

import { RootState } from '@/types';
import { browserHistory } from '@/utils';

import { ActionType } from '../reducers/user/action';

export const redirect: Middleware<unknown, RootState> = () => (next) => (action) => {
  if (action.type === ActionType.REDIRECT_TO_ROUTE) {
    browserHistory.push(action.payload);
  }

  return next(action);
};
