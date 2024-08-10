import { css } from '@emotion/react';
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

const StyledStarIcon = styled.span<Pick<RatingProps, 'rating'>>`
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  width: ${({ rating }) => calculateWidthPercentage(rating)};
  height: 100%;
  overflow: hidden;

  &::before {
    content: '';
    display: inline-block;
    height: 100%;
    background: url(${starsActiveImage}) transparent no-repeat center;
  }
`;

const SizeMixin = (width: number, height: number) => css`
  width: ${width}px;
  height: ${height}px;

  &::before {
    width: ${width}px;
    background-size: ${width}px ${height}px;
  }

  ${StyledStarIcon}::before {
    width: ${width}px;
    background-size: ${width}px ${height}px;
  }
`;

const RatingSizeToCSS = {
  [RatingSize.SMALL]: SizeMixin(73, 12),
  [RatingSize.MEDIUM]: SizeMixin(98, 16),
  [RatingSize.LARGE]: SizeMixin(147, 24),
};

const StyledRating = styled.div<Pick<RatingProps, 'size'>>`
  position: relative;
  display: block;
  font-size: 0;

  &::before {
    content: '';
    display: inline-block;
    height: 100%;
    background: url(${starImage}) transparent no-repeat center;
  }

  ${({ size }) => RatingSizeToCSS[size]}
`;

const StyledText = styled.span`
  ${VisuallyHiddenMixin}
`;

function Rating({ rating, size }: RatingProps): JSX.Element {
  return (
    <StyledRating size={size}>
      <StyledStarIcon rating={rating}></StyledStarIcon>
      <StyledText>Rating</StyledText>
    </StyledRating>
  );
}

export { Rating, RatingSize };
