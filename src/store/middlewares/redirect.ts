import { Middleware } from 'redux';
import history from '../../history';
import { TRootState } from '../../types/state';
import { ActionType } from '../user-process/action';

const redirect: Middleware<unknown, TRootState> = () => (next) => (action) => {
  if (action.type === ActionType.RedirectToRoute) {
    history.push(action.payload);
  }

  return next(action);
};

export default redirect;
