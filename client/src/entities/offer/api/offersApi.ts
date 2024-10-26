import { apiClient } from '~/shared/api/apiClient';

import { Offer } from '../model/offer';

export const getOfferById = async (id: string): Promise<Offer> => {
  const { data } = await apiClient.get<Offer>(`/offers/${id}`);
  return data;
};

export const getAllOffers = async (): Promise<Offer[]> => {
  const { data } = await apiClient.get<Offer[]>('/offers');
  return data;
};
