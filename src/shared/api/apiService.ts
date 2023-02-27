import { Hotel } from '~/shared/types/hotel';
import { User } from '~/shared/types/user';

import { handleApiError } from './helpers';
import { httpClient } from './httpClient';
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

export const signOut = async (): Promise<void> => {
  try {
    await httpClient.delete<void>('/logout');
  } catch (error) {
    const result = handleApiError(error);
    throw result;
  }
};

export const getAllHotels = async (): Promise<Hotel[]> => {
  try {
    const { data } = await httpClient.get<Hotel[]>('/hotels');
    return data;
  } catch (error) {
    const result = handleApiError(error);
    throw result;
  }
};
