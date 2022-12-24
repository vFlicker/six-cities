import { httpClient } from '~/services';
import { PostReview, Review } from '~/types';

export const findAllById = async (id: number): Promise<Review[]> => {
  try {
    const { data } = await httpClient.get<Review[]>(`/comments/${id}`);
    return data;
  } catch (err) {
    throw err;
  }
};

export const create = async (postReview: PostReview): Promise<Review[]> => {
  try {
    const { id, ...review } = postReview;
    const { data } = await httpClient.post<Review[]>(`/comments/${id}`, review);
    return data;
  } catch (err) {
    throw err;
  }
};
