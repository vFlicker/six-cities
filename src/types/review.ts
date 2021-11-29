import { TUser } from './user';

export type TReview = {
  id: number,
  comment: string,
  date: string,
  rating: number,
  user: TUser,
};
