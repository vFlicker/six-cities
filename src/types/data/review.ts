import { User } from './user';

export type PostReview = {
  id: number;
  comment: string;
  rating: number;
};

export type ReviewUser = Omit<User, 'token' | 'email'>;

export type Review = {
  id: number;
  comment: string;
  date: Date;
  rating: number;
  user: ReviewUser;
};
