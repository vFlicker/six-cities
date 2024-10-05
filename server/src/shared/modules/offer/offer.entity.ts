import {
  defaultClasses,
  DocumentType,
  getModelForClass,
  modelOptions,
  prop,
  Ref,
  types,
} from '@typegoose/typegoose';

import { CityName, PropertyType } from '#src/shared/types/index.js';

import { UserEntity } from '../user/user.entity.js';

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
    minlength: [3, 'Min length for title is 3'],
  })
  public title!: string;

  @prop({
    trim: true,
    required: true,
    minlength: [20, 'Min length for description is 20'],
  })
  public description!: string;

  @prop({
    required: true,
  })
  public postDate!: Date;

  @prop({
    enum: CityName,
    required: true,
    minlength: [2, 'Min length for city is 2'],
  })
  public city!: CityName;

  @prop({
    required: true,
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
    min: 1,
    max: 5,
  })
  public rating!: number;

  @prop({
    enum: PropertyType,
    required: true,
  })
  public propertyType!: PropertyType;

  @prop({
    required: true,
    min: 1,
    max: 5,
  })
  public roomsCount!: number;

  @prop({
    required: true,
    min: 1,
    max: 10,
  })
  public guestsCount!: number;

  @prop({
    required: true,
    min: 10,
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
