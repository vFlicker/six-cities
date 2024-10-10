import { SwaggerDocument } from './type/swagger-document.type.js';

export interface ApiDocService {
  getSwaggerDocument(): SwaggerDocument;
}
