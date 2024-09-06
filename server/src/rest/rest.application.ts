import { inject, injectable } from 'inversify';

import { getMongoURI } from '#src/shared/helpers/index.js';
import { Config, RestSchema } from '#src/shared/libs/config/index.js';
import { DatabaseClient } from '#src/shared/libs/database-client/index.js';
import { Logger } from '#src/shared/libs/logger/index.js';
import { UserModel } from '#src/shared/modules/user/index.js';
import { Component, UserType } from '#src/shared/types/index.js';

@injectable()
export class RestApplication {
  constructor(
    @inject(Component.Logger) private readonly logger: Logger,
    @inject(Component.Config) private readonly config: Config<RestSchema>,
    @inject(Component.DatabaseClient)
    private readonly databaseClient: DatabaseClient,
  ) {}

  public async init(): Promise<void> {
    this.logger.info('Application initialized.');
    this.logger.info('Initialize database connection.');
    this.initDb();
    this.logger.info('Database connection initialized.');

    // TODO: remove code below
    const user = await UserModel.create({
      name: 'John Doe',
      email: 123,
      type: UserType.Pro,
      avatarUrl: 'https://example.com/avatar.jpg',
    });
    const error = user.validateSync();
    console.log({ error });
    console.log({ user });
    // TODO: remove code above
  }

  private initDb(): void {
    const username = this.config.get('DB_USERNAME');
    const password = this.config.get('DB_PASSWORD');
    const host = this.config.get('DB_HOST');
    const port = this.config.get('DB_PORT');
    const databaseName = this.config.get('DB_NAME');

    const mongoURI = getMongoURI(username, password, host, port, databaseName);
    this.databaseClient.connect(mongoURI);
  }
}
