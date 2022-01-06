import { AxiosInstance } from 'axios';
import ApiError from '../errors';
import { AppDispatch } from '../store';

export type AsyncThunkOptions = {
  dispatch: AppDispatch;
  extra: AxiosInstance;
  rejectValue: ApiError;
}
