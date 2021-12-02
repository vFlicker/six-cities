import {
  AuthorizationStatus,
  CityName,
  ReducerName,
  SortType,
} from '../const';
import ApiError from '../errors';
import { TOffer } from './offer';
import { TUser } from './user';

export type TAppProcessState = {
  activeCardId: number,
};

export type TOfferDataState = {
  currentCityName: CityName,
  currentSortType: SortType,
  offers: TOffer[],
  loading: boolean,
  error: null | ApiError,
};

export type TUserProcessState = {
  loading: boolean,
  error: ApiError | null,
  authorizationStatus: AuthorizationStatus,
  user: TUser | null
};

export type TRootState = {
  [ReducerName.APP_PROCESS]: TAppProcessState,
  [ReducerName.OFFER_DATA]: TOfferDataState,
  [ReducerName.USER_PROCESS]: TUserProcessState,
};
