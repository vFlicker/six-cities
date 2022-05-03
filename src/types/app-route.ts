import { AppRoute } from '@/constants';

export type AppRoute = typeof AppRoute[keyof typeof AppRoute];
