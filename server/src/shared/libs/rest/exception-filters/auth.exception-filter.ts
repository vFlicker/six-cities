import { NextFunction, Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import { Logger } from 'pino';

import { Component } from '#src/shared/enums/index.js';

import { ApplicationError } from '../enums/application-error.enum.js';
import { AuthenticationException } from '../exception/authentication.exception.js';
import { createErrorLog, createErrorResponse } from '../helpers.js';
import { ExceptionFilter } from './exception-filter.interface.js';

@injectable()
export class AuthExceptionFilter implements ExceptionFilter {
  constructor(@inject(Component.Logger) private readonly logger: Logger) {
    this.logger.info('Register AuthExceptionFilter');
    this.catch = this.catch.bind(this);
  }

  public catch(
    error: unknown,
    _req: Request,
    res: Response,
    next: NextFunction,
  ): void {
    if (!(error instanceof AuthenticationException)) {
      next(error);
      return;
    }

    const { httpStatusCode, message, context } = error;

    const errorMessage = createErrorLog(httpStatusCode, message, context);
    this.logger.error(errorMessage, error);

    const response = createErrorResponse(ApplicationError.AuthError, message);
    res.status(httpStatusCode).json(response);
  }
}
