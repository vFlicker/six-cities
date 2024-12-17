import { apiClient } from '~/shared/api/apiClient';

import { Offer } from '../types/offerTypes';

export const offerApi = {
  async getOfferById(id: string): Promise<Offer> {
    const { data } = await apiClient.get<Offer>(`/offers/${id}`);
    return data;
  },

  async getAllOffers(): Promise<Offer[]> {
    const { data } = await apiClient.get<Offer[]>('/offers');
    return data;
  },

  async getAllOffersByCityName(cityName: string): Promise<Offer[]> {
    const { data } = await apiClient.get<Offer[]>(
      `/offers?cityName=${cityName}`,
    );
    return data;
  },
};
