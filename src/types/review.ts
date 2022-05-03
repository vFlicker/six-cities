import { User } from './user';

export type Review = {
  id: number;
  comment: string;
  date: string;
  rating: number;
  user: User;
};
