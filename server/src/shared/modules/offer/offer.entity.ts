import {
  defaultClasses,
  DocumentType,
  getModelForClass,
  modelOptions,
  prop,
  Ref,
  types,
} from '@typegoose/typegoose';

import { CityName, PropertyType } from '#src/shared/enums/index.js';
import { UserEntity } from '#src/shared/modules/user/user.entity.js';

export type OfferDocument = DocumentType<OfferEntity>;
export type OfferModelType = types.ModelType<OfferEntity>;

class Location {
  @prop({
    required: true,
  })
  public latitude!: number;

  @prop({
    required: true,
  })
  public longitude!: number;
}

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
    type: () => String,
    enum: CityName,
    required: true,
  })
  public city!: CityName;

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
    ref: UserEntity,
    required: true,
  })
  public hostId!: Ref<UserEntity>;

  @prop({
    required: true,
    _id: false,
  })
  public location!: Location;
}

export const OfferModel = getModelForClass(OfferEntity);
