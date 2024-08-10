import styled from '@emotion/styled';
import { PropsWithChildren } from 'react';

import { withAttrs } from '~/helpers/withAttrs';
import { Color } from '~/tokens/colors';
import { IconName } from '~/tokens/icons';

import { Icon } from './Icon';
import { Typography, TypographyVariant } from './Typography';

type FilterProps = PropsWithChildren<{
  className?: string;
  label: string;
}>;

const StyledWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  width: 200px;
`;

const StyledFilter = styled.select`
  appearance: none;
  width: 100%;
  padding: 0 26px 2px 4px;
  cursor: pointer;

  &:hover {
    + svg {
      color: ${Color.ORANGE_10};
    }
  }

  &:focus {
    + svg {
      color: ${Color.ORANGE_10};
    }
  }
`;

const StyledLabel = withAttrs(
  styled(Typography)`
    order: -1;
    flex-shrink: 0;
    font-weight: 700;
  `,
  {
    variant: TypographyVariant.TEXT_3,
    as: 'label',
  },
);

const StyledChevron = withAttrs(Icon, {
  name: IconName.ARROW,
});

function Filter({ className, label, children }: FilterProps) {
  return (
    <StyledWrapper className={className}>
      <StyledFilter>{children} </StyledFilter>
      <StyledLabel>
        <StyledChevron /> {label}
      </StyledLabel>
    </StyledWrapper>
  );
}

export { Filter };
