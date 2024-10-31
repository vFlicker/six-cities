import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { inject, injectable } from 'inversify';
import { Logger } from 'pino';

import { Component } from '#src/shared/enums/index.js';

import { ApplicationError } from '../enums/application-error.enum.js';
import { createErrorLog, createErrorResponse } from '../helpers.js';
import { ExceptionFilter } from './exception-filter.interface.js';

@injectable()
export class AppExceptionFilter implements ExceptionFilter {
  constructor(@inject(Component.Logger) private readonly logger: Logger) {
    this.logger.info('Register AppExceptionFilter');
    this.catch = this.catch.bind(this);
  }

  public catch(
    error: Error,
    _req: Request,
    res: Response,
    _next: NextFunction,
  ): void {
    const { message } = error;
    const httpStatusCode = StatusCodes.INTERNAL_SERVER_ERROR;

    this.logger.error(
      createErrorLog(httpStatusCode, message, 'AppExceptionFilter'),
      error,
    );

    const response = createErrorResponse(ApplicationError.ServerError, message);
    res.status(httpStatusCode).json(response);
  }
}
