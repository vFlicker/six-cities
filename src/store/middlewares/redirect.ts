import { Middleware } from 'redux';

import { RootState } from '@/types';
import { browserHistory } from '@/utils';

export const redirect: Middleware<unknown, RootState> = () => (next) => (action) => {
  if (action.type === 'userData/redirectToRoute') {
    browserHistory.push(action.payload);
  }

  return next(action);
};
