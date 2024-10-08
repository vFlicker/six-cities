import { Response, Router } from 'express';
import asyncHandler from 'express-async-handler';
import { StatusCodes } from 'http-status-codes';
import { injectable } from 'inversify';

import { Logger } from '#src/shared/libs/logger/index.js';

import { Route } from '../route.interface.js';
import { Controller } from './controller.interface.js';

const DEFAULT_CONTENT_TYPE = 'application/json';

@injectable()
export abstract class BaseController implements Controller {
  private readonly _router: Router;

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

  public send<D>(res: Response<D>, statusCode: number, data: D): void {
    res.type(DEFAULT_CONTENT_TYPE).status(statusCode).send(data);
  }

  public created<D>(res: Response<D>, data: D): void {
    this.send(res, StatusCodes.CREATED, data);
  }

  public ok<D>(res: Response<D>, data: D): void {
    this.send(res, StatusCodes.OK, data);
  }

  public noContent(res: Response): void {
    res.status(StatusCodes.NO_CONTENT).send();
  }
}
