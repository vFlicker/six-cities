import ApiError from './api-error';
import { ApiRoute } from '../const';
import { TOffer, TReview } from '../types';

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

  private get = async <T>(url: string): Promise<T> => {
    const fullUrl = `${this.apiBase}/${url}`;

    const response = await fetch(fullUrl, {
      method: Method.GET,
      credentials: 'include',
    });

    await ApiService.checkStatus(response);

    return response.json();
  }

  getComments = async (id: number): Promise<TReview[]> => (
    this.get<TReview[]>(`${ApiRoute.COMMENTS}/${id}`)
  );

  getHotels = async (): Promise<TOffer[]> => (
    this.get<TOffer[]>(ApiRoute.HOTELS)
  );
}
