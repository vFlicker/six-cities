import request from 'axios';
import { toast } from 'react-toastify';

import { HttpCode } from '~/constants';
import { Error } from '~/types';

export const errorHandler = (error: Error): void => {
  if (!request.isAxiosError(error)) {
    throw error;
  }

  const { response } = error;

  if (response) {
    switch (response.status) {
      case HttpCode.BadRequest:
        toast.info(response.data.error);
        break;

      case HttpCode.Unauthorized:
        toast.info(response.data.error);
        break;

      case HttpCode.NotFound:
        toast.info(response.data.error);
        break;

      default:
        toast.info('Something went wrong');
        break;
    }
  }
};
