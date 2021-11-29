import { AuthorizationStatus, CityName, SortType } from '../const';
import ApiError from '../errors';
import { TOffer } from './offer';
import { TUser } from './user';
import { NameSpace } from '../store/root-reducer';

export type TAppState = {
  activeCardId: number,
  currentCityName: CityName,
  currentSortType: SortType,
};

export type TOfferDataState = {
  offers: TOffer[],
  loading: boolean,
  error: null | ApiError,
};

export type TUserProcessState = {
  loading: boolean,
  error: null | ApiError,
  authorizationStatus: AuthorizationStatus,
  user: TUser | null
};

export type TRootState = {
  [NameSpace.APP_PROCESS]: TAppState,
  [NameSpace.OFFER_DATA]: TOfferDataState,
  [NameSpace.USER_PROCESS]: TUserProcessState,
};
