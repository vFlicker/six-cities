import type { User } from '~/entities/auth/';

export type CommentData = {
  id: string;
  text: string;
  rating: number;
  author: User;
  createdAt: string;
};

export type CreateCommentData = {
  text: string;
  rating: number;
  offerId: string;
  authorId: string;
};
