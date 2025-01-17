import { prop } from '@typegoose/typegoose';

export class Location {
  @prop({
    type: String,
    default: 'Point',
  })
  public type!: string;

  @prop({
    type: [Number],
    required: true,
  })
  public coordinates!: [number, number];
}
