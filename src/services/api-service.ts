import ApiError from './api-error';
import { ApiRoute } from '../const';
import {
  TOfferServer,
  TOffer,
  TReview,
  TUserServer,
  TUser,
  TAuthData
} from '../types';

enum Method {
  GET = 'GET',
  PUT = 'PUT',
  POST = 'POST',
  DELETE = 'DELETE',
}

export default class ApiService {
  private readonly apiBase: string;

  constructor(apiBase: string) {
    this.apiBase = apiBase;
  }

  private static checkStatus = async (response: Response): Promise<void> => {
    if (!response.ok) {
      const errorText = await response.text();

      try {
        JSON.parse(errorText);
      } catch (err) {
        throw new ApiError({ message: errorText, status: response.status });
      }
    }
  }

  private static transformOffer = (offer: TOfferServer) => {
    const adaptOffer = {
      ...offer,
      previewImage: offer.preview_image,
      isFavorite: offer.is_favorite,
      isPremium: offer.is_premium,
      maxAdults: offer.max_adults,
      host: {
        ...offer.host,
        isPro: offer.host.is_pro,
        avatarUrl: offer.host.avatar_url,
      },
    };

    delete adaptOffer.preview_image;
    delete adaptOffer.is_favorite;
    delete adaptOffer.is_premium;
    delete adaptOffer.max_adults;
    delete adaptOffer.host.is_pro;
    delete adaptOffer.host.avatar_url;

    return adaptOffer;
  };

  private static transformUser = (user: TUserServer) => {
    const adaptUser = {
      ...user,
      avatarUrl: user.avatar_url,
      isPro: user.is_pro,
    };

    delete adaptUser.avatar_url;
    delete adaptUser.is_pro;

    return adaptUser;
  };

  private get = async <T>(url: string): Promise<T> => {
    const fullUrl = `${this.apiBase}/${url}`;

    const response = await fetch(fullUrl, {
      method: Method.GET,
      credentials: 'include',
    });

    await ApiService.checkStatus(response);

    return response.json();
  };

  getComments = async (id: number): Promise<TReview[]> => (
    this.get<TReview[]>(`${ApiRoute.COMMENTS}/${id}`)
  );

  getHotels = async (): Promise<TOffer[]> => {
    const offers = await this.get<TOfferServer[]>(ApiRoute.HOTELS);
    return offers.map((offer) => ApiService.transformOffer(offer));
  };

  login = async (data: TAuthData): Promise<TUser> => {
    const fullUrl = `${this.apiBase}/${ApiRoute.LOGIN}`;

    const response = await fetch(fullUrl, {
      method: Method.POST,
      credentials: 'same-origin',
      body: JSON.stringify(data),
      headers: new Headers({ 'Content-Type': 'application/json' }),
    });

    await ApiService.checkStatus(response);

    const parsedResponse = await response.json();

    return ApiService.transformUser(parsedResponse);
  };
}
