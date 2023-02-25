import { User } from '../types';
import { httpClient } from './httpClient';
import { handleApiError } from './helpers';
import { AuthData } from './types';

export const login = async (authData: AuthData): Promise<User> => {
  try {
    const { data } = await httpClient.post<User>('/login', authData);
    return data;
  } catch (error) {
    const result = handleApiError(error);
    throw result;
  }
};
