import { ArrayMinSize, IsArray, IsNumber } from 'class-validator';

import { LocationMessages } from './location.messages.js';

export class LocationDto {
  @IsArray({ message: LocationMessages.coordinates.invalidFormat })
  @ArrayMinSize(2, { message: LocationMessages.coordinates.invalidLength })
  @IsNumber(
    {},
    { each: true, message: LocationMessages.coordinates.invalidElement },
  )
  public coordinates!: [number, number];
}
