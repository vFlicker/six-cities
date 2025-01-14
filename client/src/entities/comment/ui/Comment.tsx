import styled from '@emotion/styled';

import { Color } from '~/shared/theme/colors';
import { Rating, RatingSize } from '~/shared/ui/Rating';
import { Typography, TypographyVariant } from '~/shared/ui/Typography';
import { withAttrs } from '~/shared/ui/withAttrs';

type CommentProps = {
  className?: string;
  text: string;
  rating: number;
  createdAt: string;
  authorName: string;
  authorAvatarUrl: string;
};

function Comment({
  className,
  rating,
  text,
  createdAt,
  authorName,
  authorAvatarUrl,
}: CommentProps): JSX.Element {
  return (
    <StyledWrapper className={className}>
      <StyledLeftWrapper>
        <StyledAvatarImage
          src={authorAvatarUrl}
          width="54"
          height="54"
          alt="Author avatar"
        />
        <StyledAvatarText>{authorName}</StyledAvatarText>
      </StyledLeftWrapper>
      <StyledRightWrapper>
        <StyledRating value={rating} />
        <StyledText>{text}</StyledText>
        <StyledTime dateTime={createdAt}>{createdAt}</StyledTime>
      </StyledRightWrapper>
    </StyledWrapper>
  );
}

export { Comment };

const StyledWrapper = styled.div`
  display: flex;
  gap: 22px;
`;

const StyledLeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 54px;
  min-width: 54px;
  height: 54px;
`;

const StyledAvatarImage = styled.img`
  border-radius: 50%;
`;

const StyledAvatarText = styled.span`
  color: ${Color.BLACK};
  font-size: 14px;
  line-height: 1.2143;
  word-break: break-word;
  word-wrap: break-word;
  overflow-wrap: break-word;
`;

const StyledRightWrapper = styled.div``;

const StyledRating = withAttrs(
  { size: RatingSize.MEDIUM },
  styled(Rating)`
    margin-bottom: 7px;
  `,
);

const StyledText = withAttrs(
  {
    as: 'p',
    variant: TypographyVariant.TEXT_1,
  },
  styled(Typography)`
    margin-bottom: 5px;
  `,
);

const StyledTime = styled.time`
  font-size: 14px;
  line-height: 1;
  color: ${Color.GRAY_70};
`;
