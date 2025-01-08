import { useQuery } from '@tanstack/react-query';

import { cityApi } from './cityApi';

export const useCities = () => {
  const { data, isPending } = useQuery({
    queryKey: ['cities'],
    queryFn: cityApi.getAll,
  });

  return { cities: data, isCitiesPending: isPending };
};
