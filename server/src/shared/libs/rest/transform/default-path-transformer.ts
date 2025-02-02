import { Config } from 'convict';
import { inject, injectable } from 'inversify';

import { STATIC_FILES_ROUTE, STATIC_UPLOAD_ROUTE } from '#src/rest/index.js';
import { Component } from '#src/shared/enums/index.js';
import { getFullServerPath } from '#src/shared/helpers/index.js';
import { RestSchema } from '#src/shared/libs/config/index.js';
import { Logger } from '#src/shared/libs/logger/index.js';

import {
  DEFAULT_STATIC_IMAGES,
  STATIC_RESOURCE_FIELDS,
} from './path-transformer.constant.js';
import { PathTransformer } from './path-transformer.js';

function isObject(value: unknown): value is Record<string, object> {
  return typeof value === 'object' && !Array.isArray(value) && value !== null;
}

@injectable()
export class DefaultPathTransformer implements PathTransformer {
  constructor(
    @inject(Component.Logger) private readonly logger: Logger,
    @inject(Component.Config) private readonly config: Config<RestSchema>,
  ) {
    this.logger.info('Register PathTransformer');
  }

  public execute(data: Record<string, unknown>): Record<string, unknown> {
    const stack = [data];

    while (stack.length > 0) {
      const current = stack.pop() as Record<string, unknown>;

      for (const [key, value] of Object.entries(current)) {
        if (isObject(value)) {
          stack.push(value);
          continue;
        }

        if (this.isStaticProperty(key)) {
          current[key] = this.transformValue(value);
        }
      }
    }

    return data;
  }

  private isStaticProperty(property: string): boolean {
    return STATIC_RESOURCE_FIELDS.includes(property);
  }

  private hasDefaultImage(image: string): boolean {
    return DEFAULT_STATIC_IMAGES.includes(image);
  }

  private transformValue(value: unknown): unknown {
    if (typeof value === 'string') {
      return this.transformFilenameToUrl(value);
    }

    if (Array.isArray(value)) {
      return value.map((item) => {
        const isString = typeof item === 'string';
        if (isString) return this.transformFilenameToUrl(item);
        return item;
      });
    }

    return value;
  }

  private transformFilenameToUrl(filename: string): string {
    const staticPath = STATIC_FILES_ROUTE;
    const uploadPath = STATIC_UPLOAD_ROUTE;
    const port = this.config.get('PORT');
    const host = this.config.get('HOST');
    const serverPath = getFullServerPath(host, port);
    const rootPath = this.hasDefaultImage(filename) ? staticPath : uploadPath;
    return `${serverPath}${rootPath}/${filename}`;
  }
}
