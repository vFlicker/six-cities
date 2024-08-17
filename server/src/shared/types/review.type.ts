import { User } from './user.type.js';

export type Review = {
  comment: string;
  publishedAt: Date;
  rating: number;
  author: User;
};
