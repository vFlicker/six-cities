import { Expose, Type } from 'class-transformer';

import { ExposeId } from '#src/shared/helpers/index.js';
import { CityRdo } from '#src/shared/modules/city/index.js';
import { LocationRdo } from '#src/shared/modules/location/index.js';
import { UserRdo } from '#src/shared/modules/user/index.js';

export class OfferRdo {
  @ExposeId({ name: '_id' })
  public id!: string;

  @Expose()
  public title!: string;

  @Expose()
  public description!: string;

  @Expose()
  public postDate!: Date;

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

  @Expose({ name: 'cityId' })
  @Type(() => CityRdo)
  public city!: string;

  @Expose({ name: 'hostId' })
  @Type(() => UserRdo)
  public host!: UserRdo;

  @Expose()
  @Type(() => LocationRdo)
  public location!: LocationRdo;
}
