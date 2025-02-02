import styled from '@emotion/styled';

import { CommentData } from '../types/commentTypes';
import { Comment } from './Comment';

type CommentsProps = {
  comments: CommentData[];
};

export function Comments({ comments }: CommentsProps): JSX.Element {
  return (
    <StyledWrapper>
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          authorAvatar={comment.author.avatar}
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
