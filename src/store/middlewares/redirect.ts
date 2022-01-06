import { Middleware } from 'redux';

import history from '../../history';
import { RootState } from '../../types/state';
import { ActionType } from '../model/user/action';

export const redirect: Middleware<unknown, RootState> = () => (next) => (action) => {
  if (action.type === ActionType.RedirectToRoute) {
    history.push(action.payload);
  }

  return next(action);
};
