import { NextFunction, Request, Response } from 'express';

import { AuthenticationException } from '../exception/authentication.exception.js';
import { Middleware } from './middleware.interface.js';

export class PrivateRouteMiddleware implements Middleware {
  public async execute(
    { tokenPayload }: Request,
    _res: Response,
    next: NextFunction,
  ): Promise<void> {
    if (!tokenPayload) {
      const error = new AuthenticationException('PrivateRouteMiddleware');
      next(error);
      return;
    }

    next();
  }
}
