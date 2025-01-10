import {
  defaultClasses,
  DocumentType,
  getModelForClass,
  modelOptions,
  prop,
  Ref,
  types,
} from '@typegoose/typegoose';

import { PropertyType } from '#src/shared/enums/index.js';
import { CityEntity } from '#src/shared/modules/city/index.js';
import { Location } from '#src/shared/modules/location/index.js';
import { UserEntity } from '#src/shared/modules/user/index.js';

export type OfferDocument = DocumentType<OfferEntity>;
export type OfferModelType = types.ModelType<OfferEntity>;

@modelOptions({
  schemaOptions: {
    collection: 'offers',
  },
})
export class OfferEntity extends defaultClasses.TimeStamps {
  @prop({
    trim: true,
    required: true,
    minlength: [8, 'Min length for title is 8'],
    maxlength: [128, 'Max length for title is 128'],
  })
  public title!: string;

  @prop({
    trim: true,
    required: true,
    minlength: [16, 'Min length for description is 16'],
    maxlength: [1024, 'Max length for description is 1024'],
  })
  public description!: string;

  @prop({
    required: true,
    maxlength: [255, 'Max length for preview image is 255'],
  })
  public previewImage!: string;

  @prop({
    type: String,
    required: true,
    default: [],
  })
  public offerImages!: string[];

  @prop({
    required: true,
  })
  public isPremium!: boolean;

  @prop({
    required: true,
  })
  public isFavorite!: boolean;

  @prop({
    required: true,
    min: [1, 'Min rating is 1'],
    max: [5, 'Max rating is 5'],
  })
  public rating!: number;

  @prop({
    type: () => String,
    enum: PropertyType,
    required: true,
  })
  public propertyType!: PropertyType;

  @prop({
    required: true,
    min: [1, 'Min rooms count is 1'],
    max: [5, 'Max rooms count is 5'],
  })
  public roomsCount!: number;

  @prop({
    required: true,
    min: [1, 'Min guests count is 1'],
    max: [10, 'Max guests count is 10'],
  })
  public guestsCount!: number;

  @prop({
    required: true,
    min: [10, 'Min rental price is 10'],
    max: [1_000_000, 'Max rental price is 1000000'],
  })
  public rentalPrice!: number;

  @prop({
    type: String,
    required: true,
    default: [],
  })
  public amenities!: string[];

  @prop({
    required: true,
    _id: false,
  })
  public location!: Location;

  @prop({
    ref: CityEntity,
    required: true,
  })
  public cityId!: Ref<UserEntity>;

  @prop({
    ref: UserEntity,
    required: true,
  })
  public hostId!: Ref<UserEntity>;
}

export const OfferModel = getModelForClass(OfferEntity);
