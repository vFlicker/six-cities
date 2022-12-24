import { FavoriteStatus } from '~/constants';
import { Offer } from '~/types';

import { httpClient } from './http-client';

export const findAll = async (): Promise<Offer[]> => {
  try {
    const { data } = await httpClient.get<Offer[]>('/favorite');
    return data;
  } catch (err) {
    throw err;
  }
};

export const toggleStatus = async (
  id: number,
  status: FavoriteStatus,
): Promise<Offer> => {
  try {
    const { data } = await httpClient.post<Offer>(`/favorite/${id}/${status}`);
    return data;
  } catch (err) {
    throw err;
  }
};
