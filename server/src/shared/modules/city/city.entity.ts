import {
  defaultClasses,
  DocumentType,
  getModelForClass,
  modelOptions,
  prop,
  types,
} from '@typegoose/typegoose';

import { CityName } from '#src/shared/enums/index.js';
import { Location } from '#src/shared/modules/location/index.js';

export type CityDocument = DocumentType<CityEntity>;
export type CityModelType = types.ModelType<CityEntity>;

@modelOptions({
  schemaOptions: {
    collection: 'cities',
  },
})
export class CityEntity extends defaultClasses.TimeStamps {
  @prop({
    type: () => String,
    enum: CityName,
    required: true,
  })
  public name!: CityName;

  @prop({
    required: true,
    _id: false,
  })
  public location!: Location;
}

export const CityModel = getModelForClass(CityEntity);
