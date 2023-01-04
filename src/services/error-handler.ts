import request from 'axios';
import { toast } from 'react-toastify';
import { StatusCodes } from 'http-status-codes';

export const errorHandler = (error: Error): void => {
  if (!request.isAxiosError(error)) {
    throw error;
  }

  const { response } = error;

  if (response) {
    switch (response.status) {
      case StatusCodes.BAD_REQUEST:
        toast.info(response.data.error);
        break;

      case StatusCodes.UNAUTHORIZED:
        toast.info(response.data.error);
        break;

      case StatusCodes.NOT_FOUND:
        toast.info(response.data.error);
        break;

      default:
        toast.info('Something went wrong');
        break;
    }
  }
};
