import { apiClient } from '~/shared/api';

import { City } from '../types/cityTypes';

export const cityApi = {
  async getAll(): Promise<City[]> {
    const { data } = await apiClient.get<City[]>('/cities');
    return data;
  },
};
