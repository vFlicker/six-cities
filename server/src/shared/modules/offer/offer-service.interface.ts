import { OfferDocument } from './offer.entity.js';

export interface OfferService {
  findAll(): Promise<OfferDocument[]>;
}
