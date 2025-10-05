import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { Color } from '~/shared/theme/colors';

type MarkProps = {
  size: MarkSize;
  className?: string;
};

const enum MarkSize {
  Small = 'small',
  Large = 'large',
}

function Mark({ className, size }: MarkProps): JSX.Element {
  return (
    <StyledWrapper className={className}>
      <StyledText size={size}>Premium</StyledText>
    </StyledWrapper>
  );
}

export { Mark, MarkSize };

const MarkSizeToCSS = {
  [MarkSize.Small]: css`
    font-size: 12px;
    line-height: 1.1667; // in px 14/12
  `,
  [MarkSize.Large]: css`
    font-size: 16px;
    line-height: 1.1875; // in px 19/16
  `,
};

const StyledWrapper = styled.div`
  display: inline-flex;
  margin-bottom: 8px;
  padding: 7px 11px 5px 8px;
  border-radius: 2px;
  background-color: ${Color.BLUE_20};
  transform: skew(-10deg);
`;

const StyledText = styled.span<Pick<MarkProps, 'size'>>`
  ${({ size }) => MarkSizeToCSS[size]}

  display: block;
  color: ${Color.WHITE};
  font-weight: 700;
  font-style: oblique;
  transform: skew(10deg);
`;
