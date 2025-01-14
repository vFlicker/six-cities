import { Token } from '~/shared/libs/token';

export type TokenData = { token: Token };

export type User = {
  id: string;
  username: string;
  email: string;
  type: string;
  avatarUrl: string;
};

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
