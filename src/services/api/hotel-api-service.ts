import { Offer } from '~/types';

import { httpClient } from './http-client';

export const findOneById = async (id: number): Promise<Offer> => {
  try {
    const { data } = await httpClient.get<Offer>(`/hotels/${id}`);
    return data;
  } catch (err) {
    throw err;
  }
};

export const findAll = async (): Promise<Offer[]> => {
  try {
    const { data } = await httpClient.get<Offer[]>('/hotels');
    return data;
  } catch (err) {
    throw err;
  }
};

export const findAllNearby = async (id: number): Promise<Offer[]> => {
  try {
    const { data } = await httpClient.get<Offer[]>(`/hotels/${id}/nearby`);
    return data;
  } catch (err) {
    throw err;
  }
};
