import cors from 'cors';
import express, { Express } from 'express';
import { inject, injectable } from 'inversify';
import swaggerUi from 'swagger-ui-express';

import { Component } from '#src/shared/enums/index.js';
import { getMongoURI } from '#src/shared/helpers/index.js';
import { Config, RestSchema } from '#src/shared/libs/config/index.js';
import { DatabaseClient } from '#src/shared/libs/database-client/index.js';
import { Logger } from '#src/shared/libs/logger/index.js';
import { Controller, ExceptionFilter } from '#src/shared/libs/rest/index.js';

@injectable()
export class RestApplication {
  private readonly server: Express;

  constructor(
    @inject(Component.Logger) private readonly logger: Logger,
    @inject(Component.Config) private readonly config: Config<RestSchema>,
    @inject(Component.DatabaseClient)
    private readonly databaseClient: DatabaseClient,
    @inject(Component.UserController)
    private readonly userController: Controller,
    @inject(Component.CityController)
    private readonly cityController: Controller,
    @inject(Component.OfferController)
    private readonly offerController: Controller,
    @inject(Component.ApiDocController)
    private readonly docController: Controller,
    @inject(Component.ExceptionFilter)
    private readonly appExceptionFilter: ExceptionFilter,
  ) {
    this.server = express();
  }

  public async init(): Promise<void> {
    this.logger.info('Application initialized.');

    this.logger.info('Initialize database connection...');
    await this.initDb();
    this.logger.info('Database connection initialized.');

    this.logger.info('Initialize middlewares...');
    await this.initMiddlewares();
    this.logger.info('Middlewares initialized.');

    this.logger.info('Initialize controllers...');
    await this.initControllers();
    this.logger.info('Controllers initialized.');

    this.logger.info('Initialize exception filters...');
    await this.initExceptionFilters();
    this.logger.info('Exception filters initialized.');

    this.logger.info('Initialize server...');
    await this.initServer();
    const port = this.config.get('PORT');
    this.logger.info(`Server initialized and listening on port ${port}.`);
  }

  private async initDb(): Promise<void> {
    const username = this.config.get('DB_USERNAME');
    const password = this.config.get('DB_PASSWORD');
    const host = this.config.get('DB_HOST');
    const port = this.config.get('DB_PORT');
    const databaseName = this.config.get('DB_NAME');

    const mongoURI = getMongoURI(username, password, host, port, databaseName);
    await this.databaseClient.connect(mongoURI);
  }

  private async initMiddlewares(): Promise<void> {
    this.server.use(express.json());
    this.server.use(cors());
    this.server.use('/api-docs', swaggerUi.serve);
  }

  private async initControllers(): Promise<void> {
    this.server.use('/api/users', this.userController.router);
    this.server.use('/api/cities', this.cityController.router);
    this.server.use('/api/offers', this.offerController.router);
    this.server.use('/api-docs', this.docController.router);
  }

  private async initExceptionFilters(): Promise<void> {
    this.server.use(this.appExceptionFilter.catch);
  }

  private async initServer(): Promise<void> {
    const port = this.config.get('PORT');
    this.server.listen(port);
  }
}
