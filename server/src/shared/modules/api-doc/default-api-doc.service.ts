import { readFileSync } from 'fs';
import { inject, injectable } from 'inversify';
import { resolve } from 'path';
import yaml from 'yaml';

import { Component } from '#src/shared/enums/index.js';
import { getCurrentModuleDirectoryPath } from '#src/shared/helpers/index.js';
import { Logger } from '#src/shared/libs/logger/index.js';

import { ApiDocService } from './api-doc-service.interface.js';
import { SwaggerDocument } from './type/swagger-document.type.js';

@injectable()
export class DefaultApiDocService implements ApiDocService {
  private swaggerDocument: SwaggerDocument = null!;

  constructor(@inject(Component.Logger) private readonly logger: Logger) {
    this.loadSwaggerDocument();
  }

  private loadSwaggerDocument() {
    try {
      const modulePath = getCurrentModuleDirectoryPath();
      const yamlSpecPath = 'specification/six-cities.spec.yml';
      const resolvedDestination = resolve(modulePath, '../../..', yamlSpecPath);
      const yamlDocument = readFileSync(resolvedDestination, 'utf8');
      this.swaggerDocument = yaml.parse(yamlDocument);
      this.logger.info('Swagger document loaded successfully');
    } catch (err: unknown) {
      this.logger.error('Error loading Swagger document', err as Error);
    }
  }

  public getSwaggerDocument(): SwaggerDocument {
    return this.swaggerDocument;
  }
}
