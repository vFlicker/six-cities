import { AuthData, User } from '~/types';

import { httpClient } from './http-client';

export const checkStatus = async (): Promise<User> => {
  try {
    const { data } = await httpClient.get<User>('/login');
    return data;
  } catch (err) {
    throw err;
  }
};

export const login = async (authData: AuthData): Promise<User> => {
  try {
    const { data } = await httpClient.post<User>('/login', authData);
    return data;
  } catch (err) {
    throw err;
  }
};

export const logout = async (): Promise<void> => {
  try {
    await httpClient.delete<void>('logout');
  } catch (err) {
    throw err;
  }
};
