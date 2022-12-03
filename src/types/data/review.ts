import { CamelToSnakeCaseNested } from '../util-types';
import { User } from './user';

export type ReviewUser = Omit<User, 'token' | 'email'>;

export type Review = {
  id: number;
  comment: string;
  date: Date;
  rating: number;
  user: ReviewUser;
};

export type ReviewServer = CamelToSnakeCaseNested<Review>;
