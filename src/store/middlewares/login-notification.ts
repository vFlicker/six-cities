import { isRejectedWithValue } from '@reduxjs/toolkit';
import { Middleware } from 'redux';
import { toast } from 'react-toastify';

import { State } from '~/types';
import { ApiError } from '~/services';
import { StatusCodes } from 'http-status-codes';

export const loginNotification: Middleware<unknown, State> =
  () => (next) => (action) => {
    if (isRejectedWithValue(action)) {
      const error = action.payload as ApiError;
      if (error.status === StatusCodes.UNAUTHORIZED) {
        toast.info(error.message);
      }
    }

    return next(action);
  };
