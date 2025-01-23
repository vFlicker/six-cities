import { createSecretKey } from 'node:crypto';

import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { jwtVerify } from 'jose';

import { HttpError, Middleware } from '#src/shared/libs/rest/index.js';

import { TokenPayload } from './types/token-payload.js';

// TODO: can I to get rid of TokenPayload?
function isTokenPayload(payload: unknown): payload is TokenPayload {
  return (
    typeof payload === 'object' &&
    payload !== null &&
    'email' in payload &&
    typeof payload.email === 'string' &&
    'username' in payload &&
    typeof payload.username === 'string' &&
    'id' in payload &&
    typeof payload.id === 'string'
  );
}

export class ParseTokenMiddleware implements Middleware {
  constructor(private readonly jwtSecret: string) {
    this.execute = this.execute.bind(this);
  }

  public async execute(
    req: Request,
    _res: Response,
    next: NextFunction,
  ): Promise<void> {
    const authorizationHeader = req.headers?.authorization?.split(' ');
    if (!authorizationHeader) {
      next();
      return;
    }

    const token = authorizationHeader[1];

    try {
      const secretKey = createSecretKey(this.jwtSecret, 'utf-8');
      const { payload } = await jwtVerify(token, secretKey);

      if (isTokenPayload(payload)) {
        req.tokenPayload = { ...payload };
        next();
        return;
      } else {
        throw new Error('Bad token');
      }
    } catch {
      return next(
        new HttpError(
          StatusCodes.UNAUTHORIZED,
          'Invalid token',
          'ParseTokenMiddleware',
        ),
      );
    }
  }
}
