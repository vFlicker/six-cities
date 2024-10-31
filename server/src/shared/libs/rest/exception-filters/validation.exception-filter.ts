import { NextFunction, Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import { Logger } from 'pino';

import { Component } from '#src/shared/enums/index.js';

import { ApplicationError } from '../enums/application-error.enum.js';
import { ValidationException } from '../exception/validation.exception.js';
import { createErrorLog, createErrorResponse } from '../helpers.js';
import { ExceptionFilter } from './exception-filter.interface.js';

@injectable()
export class ValidationExceptionFilter implements ExceptionFilter {
  constructor(@inject(Component.Logger) private readonly logger: Logger) {
    this.logger.info('Register ValidationExceptionFilter');
    this.catch = this.catch.bind(this);
  }

  public catch(
    error: unknown,
    _req: Request,
    res: Response,
    next: NextFunction,
  ): void {
    if (!(error instanceof ValidationException)) {
      next(error);
      return;
    }

    const { httpStatusCode, message, errors, context } = error;

    const errorMessage = createErrorLog(httpStatusCode, message, context);
    this.logger.error(errorMessage, error);

    const errorType = ApplicationError.ValidationError;
    const errorResponse = createErrorResponse(errorType, message, errors);
    res.status(httpStatusCode).json(errorResponse);
  }
}
