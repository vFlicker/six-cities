import { ClassConstructor, plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { Middleware } from './middleware.interface.js';

export class ValidateDtoMiddleware implements Middleware {
  constructor(private readonly dto: ClassConstructor<object>) {}

  public async execute(
    { body }: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    const dtoInstance = plainToInstance(this.dto, body);
    const errors = await validate(dtoInstance);

    if (errors.length) {
      res.status(StatusCodes.BAD_REQUEST).send(errors);
      return;
    }

    next();
  }
}
