import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';

import { offerApi } from './offerApi';

export const useOffersForCity = () => {
  const [searchParams] = useSearchParams();
  const cityName = searchParams.get('cityName');

  const { data, isPending } = useQuery({
    queryKey: ['offers', cityName],
    queryFn: () => offerApi.getAllForCity(cityName!),
    enabled: !!cityName,
  });

  return { offersForCity: data, isOffersForCityPending: isPending };
};
