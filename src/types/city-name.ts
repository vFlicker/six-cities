import { CityName } from '@/constants';

export type CityName = typeof CityName[keyof typeof CityName];
