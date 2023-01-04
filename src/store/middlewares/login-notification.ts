import { isRejectedWithValue } from '@reduxjs/toolkit';
import { Middleware } from 'redux';
import { toast } from 'react-toastify';

import { Error, State } from '~/types';
import { StatusCodes } from 'http-status-codes';

export const loginNotification: Middleware<unknown, State> =
  () => (next) => (action) => {
    if (isRejectedWithValue(action)) {
      const error = action.payload as Error;
      if (error.statusCode === StatusCodes.UNAUTHORIZED) {
        toast.info(error.message);
      }
    }

    return next(action);
  };
