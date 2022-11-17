import { CamelToSnakeCaseNested } from '../util-types';
import { User } from './user';

export type Review = {
  id: number;
  comment: string;
  date: string;
  rating: number;
  user: User;
};

export type ReviewServer = CamelToSnakeCaseNested<Review>;
