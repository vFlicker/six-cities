import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AxiosInstance } from 'axios';
import { Action } from 'redux';
import { TRootState } from './state';
import {
  changeCityName,
  changeSortType,
  loginFailure,
  loginRequest,
  loginSuccess,
  offersError,
  offersLoaded,
  offersRequested,
  setActiveCard,
} from '../store/action';

export type TAppProcessAction =
  | ReturnType<typeof changeCityName>
  | ReturnType<typeof changeSortType>
  | ReturnType<typeof setActiveCard>

export type TOfferDataAction =
  | ReturnType<typeof offersRequested>
  | ReturnType<typeof offersLoaded>
  | ReturnType<typeof offersError>

export type TUserProcessAction =
  | ReturnType<typeof loginRequest>
  | ReturnType<typeof loginSuccess>
  | ReturnType<typeof loginFailure>;

export type TRootAction =
  | TAppProcessAction
  | TOfferDataAction
  | TUserProcessAction;

export type TThunkDispatch = ThunkDispatch<TRootState, AxiosInstance, Action>;

export type TThunkAction = ThunkAction<void, TRootState, AxiosInstance, Action>;
