import { NextFunction, Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import { Logger } from 'pino';

import { Component } from '#src/shared/enums/index.js';
import { ExceptionFilter } from '#src/shared/libs/rest/index.js';

import { BaseUserException } from './errors/base-user.exception.js';

@injectable()
export class AuthExceptionFilter implements ExceptionFilter {
  constructor(@inject(Component.Logger) private readonly logger: Logger) {
    this.logger.info(`Register AuthExceptionFilter`);

    this.catch = this.catch.bind(this);
  }

  public catch(
    error: unknown,
    _req: Request,
    res: Response,
    next: NextFunction,
  ): void {
    if (!(error instanceof BaseUserException)) {
      next(error);
      return;
    }

    const { httpStatusCode, message } = error;

    this.logger.error(`[AuthModule] ${message}`, error);
    // TODO: should we use createErrorHelper?
    res.status(httpStatusCode).json({ type: 'AUTHORIZATION', error: message });
  }
}
