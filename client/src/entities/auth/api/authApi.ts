import { apiClient } from '~/shared/api';

import { AuthData, RegisterData, TokenData } from '../types/authTypes';

export const authApi = {
  async login(body: AuthData): Promise<TokenData> {
    const { data } = await apiClient.post<TokenData>('/users/login', body);
    return data;
  },

  async checkAuthStatus(): Promise<void> {
    await apiClient.get('/users/auth');
  },

  async register(body: RegisterData): Promise<TokenData> {
    const { data } = await apiClient.post<TokenData>('/users/register', body);
    return data;
  },
};
