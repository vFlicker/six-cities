import { apiClient } from '~/shared/lib/api';

import { RegisterData, TokenData } from '../model/auth-types';

export const authApiService = {
  async register(body: RegisterData): Promise<TokenData> {
    const { data } = await apiClient.post<TokenData>('/users/register', body);
    return data;
  },
};
