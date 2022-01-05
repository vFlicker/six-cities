import { AxiosInstance } from 'axios';
import ApiError from '../errors';
import { AppDispatch } from './state';

export type TAsyncThunkOptions = {
  dispatch: AppDispatch;
  extra: AxiosInstance;
  rejectValue: ApiError;
}
