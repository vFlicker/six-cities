import { NextFunction, Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import { Logger } from 'pino';

import { Component } from '#src/shared/enums/index.js';

import { ApplicationError } from '../enums/application-error.enum.js';
import { HttpError } from '../errors/http-error.js';
import { createErrorLog, createErrorResponse } from '../helpers.js';
import { ExceptionFilter } from './exception-filter.interface.js';

@injectable()
export class HttpErrorExceptionFilter implements ExceptionFilter {
  constructor(@inject(Component.Logger) private readonly logger: Logger) {
    this.logger.info('Register HttpErrorExceptionFilter');
    this.catch = this.catch.bind(this);
  }

  public catch(
    error: unknown,
    _req: Request,
    res: Response,
    next: NextFunction,
  ): void {
    if (!(error instanceof HttpError)) {
      next(error);
      return;
    }

    const { httpStatusCode, message, context } = error;

    const errorMessage = createErrorLog(httpStatusCode, message, context);
    this.logger.error(errorMessage, error);

    const errorType = ApplicationError.CommonError;
    const errorResponse = createErrorResponse(errorType, message);
    res.status(httpStatusCode).json(errorResponse);
  }
}
