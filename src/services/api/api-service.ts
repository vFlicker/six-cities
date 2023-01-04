import { FavoriteStatus } from '~/constants';
import { AuthData, Offer, PostReview, Review, User } from '~/types';

import { handleError } from './handle-error';
import { httpClient } from './http-client';

export const checkAuthStatus = async (): Promise<User> => {
  try {
    const { data } = await httpClient.get<User>('/login');
    return data;
  } catch (error) {
    handleError(error);
  }
};

export const login = async (authData: AuthData): Promise<User> => {
  try {
    const { data } = await httpClient.post<User>('/login', authData);
    return data;
  } catch (error) {
    handleError(error);
  }
};

export const logout = async (): Promise<void> => {
  try {
    await httpClient.delete<void>('logout');
  } catch (error) {
    handleError(error);
  }
};

export const findFavoriteOffers = async (): Promise<Offer[]> => {
  try {
    const { data } = await httpClient.get<Offer[]>('/favorite');
    return data;
  } catch (error) {
    handleError(error);
  }
};

export const toggleFavoriteStatus = async (
  id: number,
  status: FavoriteStatus,
): Promise<Offer> => {
  try {
    const { data } = await httpClient.post<Offer>(`/favorite/${id}/${status}`);
    return data;
  } catch (error) {
    handleError(error);
  }
};

export const findOneOfferById = async (id: number): Promise<Offer> => {
  try {
    const { data } = await httpClient.get<Offer>(`/hotels/${id}`);
    return data;
  } catch (error) {
    handleError(error);
  }
};

export const findAllOffers = async (): Promise<Offer[]> => {
  try {
    const { data } = await httpClient.get<Offer[]>('/hotels');
    return data;
  } catch (error) {
    handleError(error);
  }
};

export const findOffersNearby = async (id: number): Promise<Offer[]> => {
  try {
    const { data } = await httpClient.get<Offer[]>(`/hotels/${id}/nearby`);
    return data;
  } catch (error) {
    handleError(error);
  }
};

export const findAllReviewsByOfferId = async (
  id: number,
): Promise<Review[]> => {
  try {
    const { data } = await httpClient.get<Review[]>(`/comments/${id}`);
    return data;
  } catch (error) {
    handleError(error);
  }
};

export const createNewReview = async (
  postReview: PostReview,
): Promise<Review[]> => {
  try {
    const { id, ...review } = postReview;
    const { data } = await httpClient.post<Review[]>(`/comments/${id}`, review);
    return data;
  } catch (error) {
    handleError(error);
  }
};
