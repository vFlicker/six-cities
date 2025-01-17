import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import { OfferId } from '../types/offerTypes';
import { offerApi } from './offerApi';

export const useNearbyOffers = () => {
  const { offerId } = useParams<OfferId>();

  const { data, isPending } = useQuery({
    queryKey: ['nearby-offers', offerId],
    queryFn: () => offerApi.getAllNearbyOffers(offerId!),
    enabled: !!offerId,
  });

  return { nearbyOffers: data, isNearbyOffersPending: isPending };
};
