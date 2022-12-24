export type AuthData = {
  email: string;
  password: string;
};

export type User = {
  avatarUrl?: string;
  email: string;
  id: number;
  isPro?: boolean;
  name: string;
  token: string;
};
