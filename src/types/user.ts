import { CamelToSnakeCaseNested } from './helpers';

export type TUser = {
  avatarUrl?: string;
  email: string;
  id: number;
  isPro?: boolean;
  name: string;
  token: string;
};

export type TUserServer = CamelToSnakeCaseNested<TUser>;
