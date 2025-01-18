import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { DocumentExists } from '#src/shared/types/index.js';

import { HttpError } from '../errors/http-error.js';

export class DocumentExistsMiddleware {
  constructor(
    private readonly service: DocumentExists,
    private readonly entityName: string,
    private readonly paramName: string,
  ) {}

  public async execute(
    { params }: Request,
    _res: Response,
    next: NextFunction,
  ): Promise<void> {
    const documentId = params[this.paramName];

    const foundDocument = await this.service.exists(documentId);
    if (!foundDocument) {
      const error = new HttpError(
        StatusCodes.NOT_FOUND,
        `${this.entityName} with id ${documentId} not found`,
        'DocumentExistsMiddleware',
      );

      next(error);
      return;
    }

    next();
  }
}
