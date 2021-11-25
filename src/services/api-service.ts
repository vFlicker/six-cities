import Adapter from './adapter';
import ApiError from '../errors';
import { ApiRoute } from '../const';
import {
  TOfferServer,
  TOffer,
  TReview,
  TUser,
  TAuthData,
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
      let serverResponse: { status: string; error: string } | null;

      const errorText = await response.text();

      try {
        serverResponse = JSON.parse(errorText);
      } catch (err) {
        throw new ApiError({ message: errorText, status: response.status });
      }

      throw new ApiError({
        message: serverResponse ? serverResponse.error : errorText,
        status: response.status,
      });
    }
  }

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
    return offers.map((offer) => Adapter.transformOffer(offer));
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

    return Adapter.transformUser(parsedResponse);
  };
}
