import { injectable } from 'inversify';

@injectable()
export class ConsoleLogger {
  public info(message: string, ...args: unknown[]): void {
    console.info(message, ...args);
  }

  public warn(message: string, ...args: unknown[]): void {
    console.warn(message, ...args);
  }

  public error(message: string, error: Error, ...args: unknown[]): void {
    console.error(message, error, ...args);
  }

  public debug(message: string, ...args: unknown[]): void {
    console.debug(message, ...args);
  }
}
