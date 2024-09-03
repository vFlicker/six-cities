import { inject, injectable } from 'inversify';

import { Config, RestSchema } from '#src/shared/libs/config/index.js';
import { Logger } from '#src/shared/libs/logger/index.js';
import { Component } from '#src/shared/types/index.js';

@injectable()
export class RestApplication {
  constructor(
    @inject(Component.Logger) private readonly logger: Logger,
    @inject(Component.Config) private readonly config: Config<RestSchema>,
  ) {}

  public async init(): Promise<void> {
    this.logger.info('Application initialized');
    this.logger.info(`Get value from env $PORT: ${this.config.get('PORT')}`);
  }
}
