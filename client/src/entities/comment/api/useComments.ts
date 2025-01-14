import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import type { OfferId } from '~/entities/offer';

import { commentApi } from './commentApi';

export const useComments = () => {
  const { offerId } = useParams<OfferId>();

  const { data, isPending } = useQuery({
    queryKey: ['comments', offerId],
    queryFn: () => commentApi.getComments(offerId!),
    enabled: !!offerId,
  });

  return { comments: data, isCommentsPending: isPending };
};
