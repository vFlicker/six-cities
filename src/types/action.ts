import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AxiosInstance } from 'axios';
import { Action } from 'redux';
import { TState } from './state';
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

export type TAction =
  | ReturnType<typeof changeCityName>
  | ReturnType<typeof changeSortType>
  | ReturnType<typeof setActiveCard>
  | ReturnType<typeof offersRequested>
  | ReturnType<typeof offersLoaded>
  | ReturnType<typeof offersError>
  | ReturnType<typeof loginRequest>
  | ReturnType<typeof loginSuccess>
  | ReturnType<typeof loginFailure>;

export type TThunkDispatch = ThunkDispatch<TState, AxiosInstance, Action>;

export type TThunkAction = ThunkAction<void, TState, AxiosInstance, Action>;
