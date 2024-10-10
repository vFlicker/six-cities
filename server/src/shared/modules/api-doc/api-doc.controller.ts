import { Request } from 'express';
import { inject } from 'inversify';
import swaggerUi from 'swagger-ui-express';

import { Component } from '#src/shared/enums/index.js';
import { Logger } from '#src/shared/libs/logger/index.js';
import { BaseController, HttpMethod } from '#src/shared/libs/rest/index.js';

import { ApiDocService } from './api-doc-service.interface.js';
import { GetApiDocsResponse } from './type/get-api-docs.response.js';
import { GetApiDocsConfigResponse } from './type/get-api-docs-config.response.js';

export class DocController extends BaseController {
  constructor(
    @inject(Component.Logger) protected readonly logger: Logger,
    @inject(Component.ApiDocService) private readonly docService: ApiDocService,
  ) {
    super(logger);

    this.logger.info('Register routes for DocController');

    this.addRoute({
      path: '/',
      method: HttpMethod.Get,
      handler: this.getApiDocs,
    });

    this.addRoute({
      path: '/config',
      method: HttpMethod.Get,
      handler: this.getApiDocsConfig,
    });
  }

  public getApiDocs(_req: Request, res: GetApiDocsResponse): void {
    const swaggerDocument = this.docService.getSwaggerDocument();
    this.sendHtml(res, swaggerUi.generateHTML(swaggerDocument));
  }

  public getApiDocsConfig(_req: Request, res: GetApiDocsConfigResponse): void {
    const swaggerDocument = this.docService.getSwaggerDocument();
    this.ok(res, swaggerDocument);
  }
}
