import { apiClient } from '~/shared/api/apiClient';

type Token = { token: string };

export type AuthData = {
  email: string;
  password: string;
};

export type RegisterData = {
  username: string;
  email: string;
  password: string;
  passwordConfirmation: string;
};

export const login = async (body: AuthData): Promise<Token> => {
  const { data } = await apiClient.post<Token>('/users/login', body);
  return data;
};

export const register = async (body: RegisterData): Promise<Token> => {
  const { data } = await apiClient.post<Token>('/users/register', body);
  return data;
};
