import { SortType } from '~/constants';

export type SortType = typeof SortType[keyof typeof SortType];
