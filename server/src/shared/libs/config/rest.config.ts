import { config, DotenvParseOutput } from 'dotenv';

import { Logger } from '../logger/logger.interface.js';
import { Config } from './config.interface.js';

export class RestConfig implements Config {
  private readonly config: NodeJS.ProcessEnv;

  constructor(private readonly logger: Logger) {
    const { error, parsed } = config();

    if (error) {
      throw new Error(
        "Can't read .env file. Perhaps the file does not exists.",
      );
    }

    this.config = <DotenvParseOutput>parsed;
    this.logger.info('.env file found and successfully parsed.');
  }

  public get(key: string): string | undefined {
    return this.config[key];
  }
}
