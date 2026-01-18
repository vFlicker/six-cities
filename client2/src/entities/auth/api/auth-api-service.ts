import { apiClient, ApiError, parseError } from '~/shared/lib/api';

import { RegisterData, TokenData } from '../model/auth-types';

export const authApiService = {
  register: async (body: RegisterData): Promise<TokenData | ApiError> => {
    try {
      const { data } = await apiClient.post<TokenData>('/users/register', body);
      return data;
    } catch (err) {
      return parseError(err);
    }
  },
};
