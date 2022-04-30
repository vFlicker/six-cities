import { Middleware } from 'redux';

import history from '../../history';
import { RootState } from '../model/root-reducer';
import { ActionType } from '../model/user/action';

export const redirect: Middleware<unknown, RootState> = () => (next) => (action) => {
  if (action.type === ActionType.RedirectToRoute) {
    history.push(action.payload);
  }

  return next(action);
};
