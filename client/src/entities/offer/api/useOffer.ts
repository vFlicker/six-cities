import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import { OfferId } from '../types/offerTypes';
import { offerApi } from './offerApi';

export const useOffer = () => {
  const { offerId } = useParams<OfferId>();

  const { data, isPending } = useQuery({
    queryKey: ['offers', offerId],
    queryFn: () => offerApi.getById(offerId!),
    enabled: !!offerId,
  });

  return { offer: data, isOfferPending: isPending };
};
