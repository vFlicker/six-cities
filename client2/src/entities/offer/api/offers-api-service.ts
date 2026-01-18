import { apiClient } from '~/shared/lib/api';

import { Offer } from '../model/offer';

export const offerApiService = {
  getById: async (id: string): Promise<Offer | null> => {
    try {
      const { data } = await apiClient.get<Offer>(`/offers/${id}`);
      return data;
    } catch {
      return null;
    }
  },

  getAllForCity: async (cityName: string): Promise<Offer[]> => {
    const { data } = await apiClient.get<Offer[]>(
      `/offers?cityName=${cityName}`,
    );
    return data;
  },
};
