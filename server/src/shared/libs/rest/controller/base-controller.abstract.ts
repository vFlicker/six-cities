import { Response, Router } from 'express';
import asyncHandler from 'express-async-handler';
import { StatusCodes } from 'http-status-codes';
import { inject, injectable } from 'inversify';

import { Component } from '#src/shared/enums/index.js';
import { Logger } from '#src/shared/libs/logger/index.js';
import { PathTransformer } from '#src/shared/libs/rest/index.js';

import { ContentType } from '../content-type.enum.js';
import { Route } from '../route.interface.js';
import { Controller } from './controller.interface.js';

const DEFAULT_CONTENT_TYPE = ContentType.Json;

@injectable()
export abstract class BaseController implements Controller {
  private readonly _router: Router;

  @inject(Component.PathTransformer)
  private pathTransformer!: PathTransformer;

  constructor(protected readonly logger: Logger) {
    this._router = Router();
  }

  get router(): Router {
    return this._router;
  }

  public addRoute(route: Route): void {
    this.initializeRouteHandlers(route);
    this.showRouteAddedMessage(route);
  }

  private initializeRouteHandlers(route: Route): void {
    const wrapperAsyncHandler = asyncHandler(route.handler.bind(this));

    const middlewareHandlers = route.middlewares?.map((middleware) => {
      return asyncHandler(middleware.execute.bind(middleware));
    });

    const allHandlers = !middlewareHandlers
      ? wrapperAsyncHandler
      : [...middlewareHandlers, wrapperAsyncHandler];

    this._router[route.method](route.path, allHandlers);
  }

  private showRouteAddedMessage(route: Route): void {
    const message = `Route added: ${route.method.toUpperCase()} ${route.path}`;
    this.logger.info(message);
  }

  public sendHtml<T>(res: Response<T>, data: T): void {
    res.type(ContentType.Html).status(StatusCodes.OK).send(data);
  }

  public send<T>(res: Response<T>, statusCode: number, data: T): void {
    const modifiedData = this.pathTransformer.execute(
      data as Record<string, unknown>,
    );

    res
      .type(DEFAULT_CONTENT_TYPE)
      .status(statusCode)
      .json(modifiedData as T);
  }

  public created<T>(res: Response<T>, data: T): void {
    this.send(res, StatusCodes.CREATED, data);
  }

  public ok<T>(res: Response<T>, data: T): void {
    this.send(res, StatusCodes.OK, data);
  }

  public noContent(res: Response): void {
    res.status(StatusCodes.NO_CONTENT).send();
  }
}
