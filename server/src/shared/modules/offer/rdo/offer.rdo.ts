import { Expose, Type } from 'class-transformer';

import { UserRdo } from '#src/shared/modules/user/index.js';

import { LocationRdo } from './location.rdo.js';

export class OfferRdo {
  @Expose({
    name: '_id',
  })
  public id!: string;

  @Expose()
  public title!: string;

  @Expose()
  public description!: string;

  @Expose()
  public postDate!: Date;

  @Expose()
  public city!: string;

  @Expose()
  public previewImage!: string;

  @Expose()
  public offerImages!: string[];

  @Expose()
  public isPremium!: boolean;

  @Expose()
  public isFavorite!: boolean;

  @Expose()
  public rating!: number;

  @Expose()
  public propertyType!: string;

  @Expose()
  public roomsCount!: number;

  @Expose()
  public guestsCount!: number;

  @Expose()
  public rentalPrice!: number;

  @Expose()
  public amenities!: string[];

  @Expose({ name: 'hostId' })
  @Type(() => UserRdo)
  public host!: UserRdo;

  @Expose()
  @Type(() => LocationRdo)
  public location!: LocationRdo;
}
