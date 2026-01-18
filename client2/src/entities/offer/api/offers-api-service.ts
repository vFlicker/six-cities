import { apiClient } from '~/shared/lib/api';

import { Offer } from '../model/offer';

export const offerApiService = {
  getById: (id: string) => {
    return apiClient.get<Offer>(`/offers/${id}`);
  },

  getAllByCity: (cityName: string) => {
    return apiClient.get<Offer[]>(`/offers?cityName=${cityName}`);
  },
};
