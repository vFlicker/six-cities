import styled from '@emotion/styled';

import { Loader } from '~/shared/ui/Loader';

import { useComments } from '../api/useComments';
import { Comment } from './Comment';

export function Comments(): JSX.Element {
  const { comments, isCommentsPending } = useComments();

  if (isCommentsPending) return <Loader />;
  if (!comments?.length) return <p>No comments yet</p>;

  return (
    <StyledWrapper>
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          authorAvatarUrl={comment.author.avatarUrl}
          authorName={comment.author.username}
          createdAt={comment.createdAt}
          rating={comment.rating}
          text={comment.text}
        />
      ))}
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;
`;
