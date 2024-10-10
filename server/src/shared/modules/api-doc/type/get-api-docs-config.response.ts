import { Response } from 'express';

import { SwaggerDocument } from './swagger-document.type.js';

export type GetApiDocsConfigResponse = Response<SwaggerDocument>;
