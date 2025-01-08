import { useQuery } from '@tanstack/react-query';

import { offerApi } from './offerApi';

export const useOffers = () => {
  const { data, isPending } = useQuery({
    queryKey: ['offers'],
    queryFn: offerApi.getAll,
  });

  return { offers: data, isOffersPending: isPending };
};
