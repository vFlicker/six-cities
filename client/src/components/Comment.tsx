import styled from '@emotion/styled';

import { withAttrs } from '~/helpers/withAttrs';
import { Color } from '~/tokens/colors';
import { Rating, RatingSize } from '~/shared/ui/Rating';
import { Typography, TypographyVariant } from '~/shared/ui/Typography';

type ReviewsProps = {
  className?: string;
};

export function Comment({ className }: ReviewsProps): JSX.Element {
  return (
    <StyledWrapper className={className}>
      <StyledLeftWrapper>
        <StyledAvatarImage
          src="img/avatar-max.jpg"
          width="54"
          height="54"
          alt="Reviews avatar"
        />
        <StyledAvatarText>Max</StyledAvatarText>
      </StyledLeftWrapper>
      <StyledRightWrapper>
        <StyledRating value={4} />
        <StyledText>
          A quiet cozy and picturesque that hides behind a a river by the unique
          lightness of Amsterdam. The building is green and from 18th century.
        </StyledText>
        <StyledTime dateTime="2019-04-24">April 2019</StyledTime>
      </StyledRightWrapper>
    </StyledWrapper>
  );
}

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
