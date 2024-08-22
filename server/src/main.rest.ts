import { RestApplication } from './rest/index.js';
import { Logger, PinoLoger } from './shared/libs/logger/index.js';

async function bootstrap(): Promise<void> {
  const logger: Logger = new PinoLoger();

  const restApplication = new RestApplication(logger);
  await restApplication.init();
}

bootstrap();
