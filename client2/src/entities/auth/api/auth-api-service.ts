import { apiClient } from '~/shared/lib/api';

import { RegisterData, TokenData } from '../model/auth-types';

export const authApiService = {
  register: (body: RegisterData) => {
    return apiClient.post<TokenData>('/users/register', body);
  },
};
