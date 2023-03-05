import { NOTIFY_TYPE } from '~/shared/actions';
import { notifierService, NotifyPayload } from '~/shared/services/notifier';

import { MiddlewareType } from '../types';

export const notifier: MiddlewareType = () => (next) => (action) => {
  if (action.type === NOTIFY_TYPE) {
    const payload = action.payload as NotifyPayload;
    notifierService.notify(payload);
  }

  return next(action);
};
