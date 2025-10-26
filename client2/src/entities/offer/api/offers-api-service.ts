import {
  apiClient,
  isBadRequestError,
  isNotFoundError,
} from '~/shared/lib/api';

import { Offer } from '../model/offer';

// TODO: use signal

export const offerApiService = {
  async getById(id: string): Promise<Offer | null> {
    try {
      const { data } = await apiClient.get<Offer>(`/offers/${id}`);
      return data;
    } catch (err) {
      if (isNotFoundError(err) || isBadRequestError(err)) return null;
      throw err;
    }
  },

  async getAllForCity(cityName: string): Promise<Offer[]> {
    const { data } = await apiClient.get<Offer[]>(
      `/offers?cityName=${cityName}`,
    );
    return data;
  },
};
