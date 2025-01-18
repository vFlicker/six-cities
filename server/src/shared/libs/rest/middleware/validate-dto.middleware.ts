import { ClassConstructor, plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { NextFunction, Request, Response } from 'express';

import { ValidationException } from '../exception/validation.exception.js';
import { reduceValidationErrors } from '../helpers.js';
import { Middleware } from './middleware.interface.js';

export class ValidateDtoMiddleware implements Middleware {
  constructor(private readonly dto: ClassConstructor<object>) {}

  public async execute(
    req: Request,
    _res: Response,
    next: NextFunction,
  ): Promise<void> {
    const dtoInstance = plainToInstance(this.dto, req.body);
    const errors = await validate(dtoInstance);

    if (errors.length > 0) {
      const error = new ValidationException(
        'Validation error',
        reduceValidationErrors(errors),
        'ValidateDtoMiddleware',
      );

      next(error);
      return;
    }

    next();
  }
}
