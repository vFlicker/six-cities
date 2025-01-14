import { useMutation } from '@tanstack/react-query';
import { FormEvent } from 'react';
import { useParams } from 'react-router-dom';

import { useUser } from '~/entities/auth';
import { commentApi, CreateCommentData } from '~/entities/comment/';
import { OfferId } from '~/entities/offer';
import { queryClient } from '~/shared/api';

import { CreateCommentSchema } from '../model/createCommentSchema';

export const useCreateComment = () => {
  const { offerId } = useParams<OfferId>();

  const { user } = useUser();

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: commentApi.createComment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['comments', offerId] });
    },
  });

  const handleCreateComment = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const formData = new FormData(evt.currentTarget);
    const rawData = Object.fromEntries(
      formData.entries(),
    ) as CreateCommentSchema;

    const data: CreateCommentData = {
      text: rawData.text,
      rating: Number(rawData.rating),
      authorId: user!.id,
      offerId: offerId!,
    };

    mutate(data);
    evt.currentTarget.reset();
  };

  return {
    isPending,
    isError,
    error,
    handleCreateComment,
  };
};
