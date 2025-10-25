import { apiClient } from '~/shared1/lib/api';

import { Offer } from '../model/offer';

// TODO: use signal

export const offerApiService = {
  async getById(id: string): Promise<Offer> {
    const { data } = await apiClient.get<Offer>(`/offers/${id}`);
    return data;
  },

  async getAllForCity(cityName: string): Promise<Offer[]> {
    const { data } = await apiClient.get<Offer[]>(
      `/offers?cityName=${cityName}`,
    );
    return data;
  },
};
