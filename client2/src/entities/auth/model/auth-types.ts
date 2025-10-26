import { Token } from '~/shared/lib/token';

export type TokenData = { token: Token };

export type RegisterData = {
  username: string;
  email: string;
  password: string;
  passwordConfirmation: string;
};
