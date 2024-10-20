import { config } from 'dotenv';
import { inject, injectable } from 'inversify';

import { Component } from '#src/shared/enums/index.js';
import { Logger } from '#src/shared/libs/logger/index.js';

import { Config } from './config.interface.js';
import { configRestSchema, RestSchema } from './rest.schema.js';

@injectable()
export class RestConfig implements Config<RestSchema> {
  private readonly config: RestSchema;

  constructor(@inject(Component.Logger) private readonly logger: Logger) {
    const { error } = config();

    if (error) {
      throw new Error(
        "Can't read .env file. Perhaps the file does not exists.",
      );
    }

    configRestSchema.load({});
    configRestSchema.validate({ allowed: 'strict', output: this.logger.info });

    this.config = configRestSchema.getProperties();
    this.logger.info('.env file found and successfully parsed.');
  }

  public get<T extends keyof RestSchema>(key: T): RestSchema[T] {
    return this.config[key];
  }
}
