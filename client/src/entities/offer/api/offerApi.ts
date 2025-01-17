import { apiClient } from '~/shared/api';

import { Offer } from '../types/offerTypes';

// TODO: use signal

export const offerApi = {
  async getById(id: string): Promise<Offer> {
    const { data } = await apiClient.get<Offer>(`/offers/${id}`);
    return data;
  },

  async getAll(): Promise<Offer[]> {
    const { data } = await apiClient.get<Offer[]>('/offers');
    return data;
  },

  async getAllForCity(cityName: string): Promise<Offer[]> {
    const { data } = await apiClient.get<Offer[]>(
      `/offers?cityName=${cityName}`,
    );
    return data;
  },

  async getAllNearbyOffers(id: string): Promise<Offer[]> {
    const { data } = await apiClient.get<Offer[]>(`/offers/${id}/nearby`);
    return data;
  },
};
