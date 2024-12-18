import chalk from 'chalk';
import { injectable } from 'inversify';

import { getErrorMessage } from '#src/shared/helpers/common.js';

import { Logger } from './logger.interface.js';

@injectable()
export class ConsoleLogger implements Logger {
  public info(message: string, ...args: unknown[]): void {
    console.info(message, ...args);
  }

  public warn(message: string, ...args: unknown[]): void {
    console.warn(chalk.yellow(message, ...args));
  }

  public error(message: string, error: Error, ...args: unknown[]): void {
    console.error(chalk.red(message, ...args));
    console.error(chalk.red(`Error message: ${getErrorMessage(error)}`));
  }

  public debug(message: string, ...args: unknown[]): void {
    console.debug(message, ...args);
  }
}
