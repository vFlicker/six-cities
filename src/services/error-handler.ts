import request from 'axios';
import { toast } from 'react-toastify';

import { HttpCode } from '~/constants';
import { ErrorType } from '~/types';

export const errorHandler = (error: ErrorType): void => {
  if (!request.isAxiosError(error)) {
    throw error;
  }

  const { response } = error;

  if (response) {
    switch (response.status) {
      case HttpCode.BAD_REQUEST:
        toast.info(response.data.error);
        break;

      case HttpCode.UNAUTHORIZED:
        toast.info(response.data.error);
        break;

      case HttpCode.NOT_FOUND:
        toast.info(response.data.error);
        break;

      default:
        toast.info('Something went wrong');
        break;
    }
  }
};
