import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { inject, injectable } from 'inversify';
import { Logger } from 'pino';

import { createErrorObject } from '#src/shared/helpers/common.js';
import { Component } from '#src/shared/types/component.enum.js';

import { HttpError } from '../errors/http-error.js';
import { ExceptionFilter } from './exception-filter.interface.js';

@injectable()
export class AppExceptionFilter implements ExceptionFilter {
  constructor(@inject(Component.Logger) private readonly logger: Logger) {
    this.logger.info('Register AppExceptionFilter');
  }

  public catch(
    error: Error | HttpError,
    req: Request,
    res: Response,
    next: NextFunction,
  ): void {
    if (error instanceof HttpError) {
      this.handleHttpError(error, req, res, next);
      return;
    }

    this.handleOtherError(error, req, res, next);
  }

  private handleHttpError(
    error: HttpError,
    _req: Request,
    res: Response,
    _next: NextFunction,
  ): void {
    const { httpStatusCode, message, details } = error;

    const errorMessage = `[${details}]: ${httpStatusCode} — ${message}`;
    this.logger.error(errorMessage, error);

    res.status(httpStatusCode).json(createErrorObject(message));
  }

  private handleOtherError(
    error: Error,
    _req: Request,
    res: Response,
    _next: NextFunction,
  ): void {
    const { message } = error;
    this.logger.error(message, error);

    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json(createErrorObject(message));
  }
}
