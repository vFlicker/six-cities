import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import { offerApi } from '../api/offersApi';
import { OfferId } from '../types/offerTypes';

export const useOffer = () => {
  const { offerId } = useParams<OfferId>();

  const { data, isPending } = useQuery({
    queryKey: ['offers', offerId],
    queryFn: () => offerApi.getOfferById(offerId!),
    enabled: !!offerId,
  });

  return { offer: data, isOfferPending: isPending };
};
