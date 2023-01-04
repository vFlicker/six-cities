import request, { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import { StatusCodes } from 'http-status-codes';

export const errorHandler = (error: Error): string | null => {
  if (!request.isAxiosError(error)) throw error;

  const { response } = error as AxiosError<{ error: string }>;

  if (response) {
    switch (response.status) {
      case StatusCodes.BAD_REQUEST:
        toast.info(response.data.error);
        return response ? response.data.error : null;

      case StatusCodes.UNAUTHORIZED:
        toast.info(response.data.error);
        return response ? response.data.error : null;

      case StatusCodes.NOT_FOUND:
        toast.info(response.data.error);
        return response ? response.data.error : null;

      default:
        toast.info('Something went wrong');
        return response ? response.data.error : null;
    }
  }

  return null;
};
