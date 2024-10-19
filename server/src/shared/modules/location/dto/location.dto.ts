import { IsLatitude, IsLongitude } from 'class-validator';

import { LocationMessages } from './location.messages.js';

export class LocationDto {
  @IsLatitude({ message: LocationMessages.latitude.invalidFormat })
  public latitude!: number;

  @IsLongitude({ message: LocationMessages.longitude.invalidFormat })
  public longitude!: number;
}
