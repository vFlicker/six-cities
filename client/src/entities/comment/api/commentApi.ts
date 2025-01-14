import { apiClient } from '~/shared/api';

import { CommentData, CreateCommentData } from '../types/commentTypes';

export const commentApi = {
  async createComment(body: CreateCommentData): Promise<CommentData> {
    const { data } = await apiClient.post<CommentData>('/comments', body);
    return data;
  },

  async getComments(offerId: string): Promise<CommentData[]> {
    const { data } = await apiClient.get<CommentData[]>(
      `/offers/${offerId}/comments`,
    );
    return data;
  },
};
