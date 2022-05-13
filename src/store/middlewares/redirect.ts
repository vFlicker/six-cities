import { Middleware } from 'redux';

import { browserHistory } from '@/utils';

import { RootState } from '../reducers/root-reducer';
import { ActionType } from '../reducers/user/action';

export const redirect: Middleware<unknown, RootState> = () => (next) => (action) => {
  if (action.type === ActionType.REDIRECT_TO_ROUTE) {
    browserHistory.push(action.payload);
  }

  return next(action);
};
