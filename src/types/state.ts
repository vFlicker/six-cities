import { AuthorizationStatus, CityName, SortType } from '../const';
import ApiError from '../errors';
import { TOffer } from './offer';
import { TUser } from './user';
import { NameSpace } from '../store/root-reducer';

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
  error: null | ApiError,
  authorizationStatus: AuthorizationStatus,
  user: TUser | null
};

export type TRootState = {
  [NameSpace.APP_PROCESS]: TAppProcessState,
  [NameSpace.OFFER_DATA]: TOfferDataState,
  [NameSpace.USER_PROCESS]: TUserProcessState,
};
