import styled from '@emotion/styled';
import { Fragment } from 'react';

import { VisuallyHiddenMixin } from '~/helpers/VisuallyHiddenMixin';
import { withAttrs } from '~/helpers/withAttrs';
import { Color } from '~/tokens/colors';
import { IconName } from '~/tokens/icons';

import { Icon } from './Icon';

const RATING_VALUES = [5, 4, 3, 2, 1];

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

const StyledIcon = withAttrs(Icon, {
  name: IconName.STAR,
});

function Rating(): JSX.Element {
  return (
    <StyledWrapper>
      {RATING_VALUES.map((rating) => (
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

export { Rating };
