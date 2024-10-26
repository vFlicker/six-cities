import { Types } from 'mongoose';

import { CreateOfferDto } from './dto/create-offer.dto.js';
import { OfferDocument } from './offer.entity.js';

export interface OfferService {
  create(cityId: Types.ObjectId, dto: CreateOfferDto): Promise<OfferDocument>;
  findById(id: string): Promise<OfferDocument | null>;
  findAll(): Promise<OfferDocument[]>;
}
