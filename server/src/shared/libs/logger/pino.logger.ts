import { resolve } from 'node:path';

import { injectable } from 'inversify';
import { Logger as PinoInstance, pino, transport } from 'pino';

import { getCurrentModuleDirectoryPath } from '#src/shared/helpers/index.js';

import { Logger } from './logger.interface.js';

@injectable()
export class PinoLogger implements Logger {
  private readonly logger: PinoInstance;

  constructor() {
    const modulePath = getCurrentModuleDirectoryPath();
    const logFilePath = 'logs/rest.log';
    const destination = resolve(modulePath, '../../..', logFilePath);

    const multiTransport = transport({
      targets: [
        { level: 'debug', target: 'pino/file', options: { destination } },
        { level: 'info', target: 'pino/file', options: {} },
      ],
    });

    this.logger = pino({}, multiTransport);
  }

  public info(message: string, ...args: unknown[]): void {
    this.logger.info(message, ...args);
  }

  public warn(message: string, ...args: unknown[]): void {
    this.logger.warn(message, ...args);
  }

  public error(message: string, error: Error, ...args: unknown[]): void {
    this.logger.error(message, error, ...args);
  }

  public debug(message: string, ...args: unknown[]): void {
    this.logger.debug(message, ...args);
  }
}
