import { Response } from 'express';

export type LoginUserResponse = Response<{ token: string }>;
