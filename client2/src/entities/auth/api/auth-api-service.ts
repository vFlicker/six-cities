import { apiClient, ErrorDetail } from '~/shared/lib/api';
import { isClientError } from '~/shared/lib/api/validation-errors';

import { RegisterData, TokenData } from '../model/auth-types';

type ApiErrorResponse =
  | { validationErrors: ErrorDetail[] }
  | { errorMessage: string };

export const authApiService = {
  async register(body: RegisterData): Promise<TokenData | ApiErrorResponse> {
    try {
      const { data } = await apiClient.post<TokenData>('/users/register', body);
      return data;
    } catch (err) {
      if (isClientError(err)) {
        if (err.response?.data.details) {
          return { validationErrors: err.response.data.details };
        }

        if (err.response?.data.message) {
          return { errorMessage: err.response.data.message };
        }
      }

      console.error('Registration error:', err);
      throw err;
    }
  },
};
