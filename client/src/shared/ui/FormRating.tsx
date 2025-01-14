import styled from '@emotion/styled';
import { Fragment } from 'react';

import { Color } from '~/shared/theme/colors';
import { IconName } from '~/shared/theme/icons';
import { VisuallyHiddenMixin } from '~/shared/ui/VisuallyHiddenMixin';
import { withAttrs } from '~/shared/ui/withAttrs';

import { Icon } from './Icon';

type FormRatingProps = {
  className?: string;
};

const FORM_RATING_VALUES = [5, 4, 3, 2, 1];

function FormRating({ className }: FormRatingProps): JSX.Element {
  return (
    <StyledWrapper className={className}>
      {FORM_RATING_VALUES.map((rating) => (
        <Fragment key={rating}>
          <StyledInput
            type="radio"
            id={`rating-${rating}`}
            name="rating"
            value={rating}
          />
          <StyledLabel htmlFor={`rating-${rating}`}>
            <StyledIcon />
          </StyledLabel>
        </Fragment>
      ))}
    </StyledWrapper>
  );
}

export { FormRating };

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 2px;
`;

const StyledInput = styled.input`
  ${VisuallyHiddenMixin}

  &:checked ~ label svg,
  &:focus ~ label svg {
    fill: ${Color.ORANGE_10};
  }
`;

const StyledLabel = styled.label`
  display: block;
  width: 37px;
  height: 33px;
  cursor: pointer;

  &:hover svg,
  &:hover ~ & svg {
    fill: ${Color.ORANGE_10};
  }
`;

const StyledIcon = withAttrs(
  {
    name: IconName.Star,
  },
  Icon,
);
