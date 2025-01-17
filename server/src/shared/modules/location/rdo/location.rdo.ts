import { Expose } from 'class-transformer';

export class LocationRdo {
  @Expose()
  public coordinates!: [number, number];
}
