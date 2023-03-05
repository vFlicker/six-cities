import { createAction } from '@reduxjs/toolkit';

import { NotifyPayload } from '~/shared/services/notifier';

export const NOTIFY_TYPE = 'app/notify';
export const notify = createAction<NotifyPayload>(NOTIFY_TYPE);
