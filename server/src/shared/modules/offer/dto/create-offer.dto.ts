import { Type } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsEnum,
  IsInt,
  IsMongoId,
  IsNumber,
  IsString,
  IsUrl,
  Length,
  Max,
  MaxLength,
  Min,
  ValidateNested,
} from 'class-validator';

import { CityName, PropertyType } from '#src/shared/enums/index.js';
import { LocationDto } from '#src/shared/modules/location/index.js';

import { CreateOfferMessages } from './create-offer.messages.js';

export class CreateOfferDto {
  @IsString({ message: CreateOfferMessages.title.invalidFormat })
  @Length(8, 128, { message: CreateOfferMessages.title.lengthField })
  public title!: string;

  @IsString({ message: CreateOfferMessages.description.invalidFormat })
  @Length(16, 1024, { message: CreateOfferMessages.description.lengthField })
  public description!: string;

  @IsUrl({}, { message: CreateOfferMessages.previewImage.invalidFormat })
  @MaxLength(255, { message: CreateOfferMessages.previewImage.maxLength })
  public previewImage!: string;

  @IsArray({ message: CreateOfferMessages.offerImages.invalidFormat })
  @IsUrl({}, { each: true })
  public offerImages!: string[];

  @IsBoolean({ message: CreateOfferMessages.isPremium.invalidFormat })
  public isPremium!: boolean;

  @IsBoolean({ message: CreateOfferMessages.isFavorite.invalidFormat })
  public isFavorite!: boolean;

  @IsNumber()
  @Min(1, { message: CreateOfferMessages.rating.minValue })
  @Max(5, { message: CreateOfferMessages.rating.maxValue })
  public rating!: number;

  @IsEnum(PropertyType, {
    message: CreateOfferMessages.propertyType.invalid,
  })
  public propertyType!: string;

  @IsInt({ message: CreateOfferMessages.roomsCount.invalidFormat })
  @Min(1, { message: CreateOfferMessages.roomsCount.minValue })
  @Max(10, { message: CreateOfferMessages.roomsCount.maxValue })
  public roomsCount!: number;

  @IsInt({ message: CreateOfferMessages.guestsCount.invalidFormat })
  @Min(1, { message: CreateOfferMessages.guestsCount.minValue })
  @Max(10, { message: CreateOfferMessages.guestsCount.maxValue })
  public guestsCount!: number;

  @IsInt({ message: CreateOfferMessages.guestsCount.maxValue })
  @Min(10, { message: CreateOfferMessages.guestsCount.maxValue })
  @Max(1_000_000, { message: CreateOfferMessages.rentalPrice.maxValue })
  public rentalPrice!: number;

  @IsArray({ message: CreateOfferMessages.amenities.invalidFormat })
  @IsString({ each: true })
  public amenities!: string[];

  @ValidateNested()
  @Type(() => LocationDto)
  public location!: LocationDto;

  @IsEnum(CityName, { message: CreateOfferMessages.city.invalidFormat })
  public cityName!: string;

  @IsMongoId({ message: CreateOfferMessages.hostId.invalidFormat })
  public hostId!: string;
}
