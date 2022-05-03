import { Middleware } from 'redux';

import { history } from '@/utils';

import { RootState } from '../state/root-reducer';
import { ActionType } from '../state/user/action';

export const redirect: Middleware<unknown, RootState> = () => (next) => (action) => {
  if (action.type === ActionType.REDIRECT_TO_ROUTE) {
    history.push(action.payload);
  }

  return next(action);
};
