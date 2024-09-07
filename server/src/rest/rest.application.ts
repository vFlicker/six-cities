import express, { Express } from 'express';
import { inject, injectable } from 'inversify';

import { getMongoURI } from '#src/shared/helpers/index.js';
import { Config, RestSchema } from '#src/shared/libs/config/index.js';
import { DatabaseClient } from '#src/shared/libs/database-client/index.js';
import { Logger } from '#src/shared/libs/logger/index.js';
import { Controller } from '#src/shared/libs/rest/index.js';
import { Component } from '#src/shared/types/index.js';

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
  ) {
    this.server = express();
  }

  public async init(): Promise<void> {
    this.logger.info('Application initialized.');

    this.logger.info('Initialize database connection...');
    await this.initDb();
    this.logger.info('Database connection initialized.');

    this.logger.info('Initialize controllers...');
    this.initControllers();
    this.logger.info('Controllers initialized.');

    this.logger.info('Initialize server...');
    this.initServer();
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

  private initControllers(): void {
    this.server.use('/users', this.userController.router);
  }

  private initServer(): void {
    const port = this.config.get('PORT');
    this.server.listen(port);
  }
}