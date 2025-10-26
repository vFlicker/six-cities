export type Token = string;

const AUTH_TOKEN_KEY_NAME = 'six-cities';

export const getToken = (): Token | null => {
  return localStorage.getItem(AUTH_TOKEN_KEY_NAME);
};

export const saveToken = (token: Token): void => {
  localStorage.setItem(AUTH_TOKEN_KEY_NAME, token);
};

export const dropToken = (): void => {
  localStorage.removeItem(AUTH_TOKEN_KEY_NAME);
};
