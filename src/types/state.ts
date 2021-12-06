import { AuthorizationStatus, CityName, SortType } from '../const';
import ApiError from '../errors';
import { TOffers } from './offer';
import rootReducer from '../store/root-reducer';
import { TUser } from './user';

export type TAppProcessState = {
  activeCardId: number;
};

export type TOfferDataState = {
  currentCityName: CityName;
  currentSortType: SortType;
  offers: TOffers;
  loading: boolean;
  error: null | ApiError;
};

export type TUserProcessState = {
  loading: boolean;
  error: ApiError | null;
  authorizationStatus: AuthorizationStatus;
  user: TUser | null;
};

export type TRootState = ReturnType<typeof rootReducer>;
