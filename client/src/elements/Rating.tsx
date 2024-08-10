import styled from '@emotion/styled';

import { VisuallyHiddenMixin } from '~/helpers/VisuallyHiddenMixin';
import starImage from '~/images/stars.svg';
import starsActiveImage from '~/images/stars-active.svg';

type RatingProps = {
  size: RatingSize;
  rating: number;
};

const enum RatingSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

const calculateWidthPercentage = (rating: number): string => {
  const clampedRating = Math.max(0, Math.min(rating, 5));
  return `${(clampedRating / 5) * 100}%`;
};

const StyledStarIcon = styled.span``;

const RatingSizeToCSS = {
  [RatingSize.SMALL]: `
    width: 73px;
    height: 12px;

    &::before {
      width: 73px;
      background-size: 73px 12px;
    }

    ${StyledStarIcon}::before {
      width: 73px;
      background-size: 73px 12px;
    }
  `,
  [RatingSize.MEDIUM]: `
    width: 98px;
    height: 16px;

    &::before {
      width: 98px;
      background-size: 98px 16px;
    }

    ${StyledStarIcon}::before {
      width: 98px;
      background-size: 98px 16px;
    }
  `,
  [RatingSize.LARGE]: `
    width: 147px;
    height: 24px;

    &::before {
      width: 147px;
      background-size: 147px 24px;
    }

    ${StyledStarIcon}::before {
      width: 147px;
      background-size: 147px 24px;
    }
  `,
};

const StyledRating = styled.div<RatingProps>`
  position: relative;
  display: block;
  font-size: 0;

  &::before {
    content: '';
    display: inline-block;
    height: 100%;
    background: url(${starImage}) transparent no-repeat center;
  }

  & ${StyledStarIcon} {
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    width: ${({ rating }) => calculateWidthPercentage(rating)};
    height: 100%;
    overflow: hidden;
  }

  & ${StyledStarIcon}::before {
    content: '';
    display: inline-block;
    height: 100%;
    background: url(${starsActiveImage}) transparent no-repeat center;
  }

  ${({ size }) => RatingSizeToCSS[size]}
`;

const StyledText = styled.span`
  ${VisuallyHiddenMixin}
`;

function Rating(props: RatingProps): JSX.Element {
  return (
    <StyledRating {...props}>
      <StyledStarIcon></StyledStarIcon>
      <StyledText>Rating</StyledText>
    </StyledRating>
  );
}

export { Rating, RatingSize };
