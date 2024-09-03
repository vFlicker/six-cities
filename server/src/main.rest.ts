import { RestApplication } from './rest/index.js';
import { RestConfig } from './shared/libs/config/index.js';
import { Logger, PinoLogger } from './shared/libs/logger/index.js';

async function bootstrap(): Promise<void> {
  const logger: Logger = new PinoLogger();
  const config = new RestConfig(logger);

  const restApplication = new RestApplication(logger, config);
  await restApplication.init();
}

bootstrap();
