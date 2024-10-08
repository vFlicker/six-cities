import { CreateOfferDto } from './dto/create-offer.dto.js';
import { OfferDocument } from './offer.entity.js';

export interface OfferService {
  create(dto: CreateOfferDto): Promise<OfferDocument>;
  findAll(): Promise<OfferDocument[]>;
}
