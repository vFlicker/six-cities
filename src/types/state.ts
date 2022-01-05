import { AuthorizationStatus, CityName, SortType } from '../const';
import ApiError from '../errors';
import { TGroupedOffers, TOffer, TOffers } from './offer';
import { store } from '../store';
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
  error: ApiError | null;
};

export type TOffersFavoriteDataState = {
  offersFavorite: TOffers;
  loading: boolean;
  error: ApiError | null;
};

export type TOfferNearbyDataState = {
  offersNearby: TOffers;
  loading: boolean;
  error: ApiError | null;
};

export type TUserProcessState = {
  loading: boolean;
  error: ApiError | null;
  authorizationStatus: AuthorizationStatus;
  user: TUser | null;
};

export type TRootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch
