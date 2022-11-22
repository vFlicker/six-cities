import { CamelToSnakeCaseNested } from '../util-types';

export type User = {
  avatarUrl?: string;
  email: string;
  id: number;
  isPro?: boolean;
  name: string;
  token: string;
};

export type UserServer = CamelToSnakeCaseNested<User>;