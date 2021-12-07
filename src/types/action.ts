import { ThunkAction } from 'redux-thunk';
import { AxiosInstance } from 'axios';
import { Action } from 'redux';
import { TRootState } from './state';

export type TThunkAction = ThunkAction<Promise<void>, TRootState, AxiosInstance, Action>;
