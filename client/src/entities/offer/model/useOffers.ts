import { useQuery } from '@tanstack/react-query';

import { offerApi } from '../api/offersApi';

export const useOffers = () => {
  const { data, isPending } = useQuery({
    queryKey: ['offers'],
    queryFn: offerApi.getAllOffers,
  });

  return { offers: data, isOffersPending: isPending };
};
