import { Type } from 'class-transformer';
import { IsEnum, ValidateNested } from 'class-validator';

import { CityName } from '#src/shared/enums/index.js';
import { LocationDto } from '#src/shared/modules/location/index.js';

import { CreateCityMessages } from './create-city.messages.js';

export class CreateCityDto {
  @IsEnum(CityName, { message: CreateCityMessages.city.invalidFormat })
  public name!: string;

  @ValidateNested()
  @Type(() => LocationDto)
  public location!: LocationDto;
}
