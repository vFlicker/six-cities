import { Logger } from '#src/shared/libs/logger/index.js';

export class RestApplication {
  constructor(private readonly logger: Logger) {}

  public async init(): Promise<void> {
    this.logger.info('Application initialized');
  }
}
