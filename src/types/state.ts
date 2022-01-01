import { AuthorizationStatus, CityName, SortType } from '../const';
import ApiError from '../errors';
import { TGroupedOffers, TOffer, TOffers } from './offer';
import rootReducer from '../store/root-reducer';
import { TUser } from './user';

export type TAppProcessState = {
  activeCardId: number;
};

export type TOfferDataState = {
  offer: TOffer | null;
  loading: boolean;
  error: null | ApiError;
};

export type TOffersDataState = {
  currentCityName: CityName;
  currentSortType: SortType;
  groupedOffers: TGroupedOffers | null;
  loading: boolean;
  error: null | ApiError;
};

export type TOfferNearbyDataState = {
  offersNearby: TOffers;
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
