import { toast } from 'react-toastify';

import { NotifyPayload } from './types';

export const notify = ({ message, type }: NotifyPayload): void => {
  toast[type](message);
};
