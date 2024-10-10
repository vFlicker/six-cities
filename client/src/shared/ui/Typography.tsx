import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { PropsWithChildren } from 'react';

import { Color } from '~/shared/tokens/colors';

type TypographyProps = PropsWithChildren<{
  variant: TypographyVariant;
  $color?: Color;
}>;

const enum TypographyVariant {
  TITLE_1 = 'title-1',
  TITLE_2 = 'title-2',
  TITLE_3 = 'title-3',
  TITLE_4 = 'title-4',
  TEXT_1 = 'text-1',
  TEXT_2 = 'text-2',
  TEXT_3 = 'text-3',
}

const TypographyVariantToCSS = {
  [TypographyVariant.TITLE_1]: css`
    font-size: 38px;
    font-weight: 700;
    font-style: oblique;
    line-height: 1.21053;
  `,
  [TypographyVariant.TITLE_2]: css`
    font-size: 32px;
    font-weight: 700;
    font-style: oblique;
    line-height: 1.1429;
  `,
  [TypographyVariant.TITLE_3]: css`
    font-size: 24px;
    font-weight: 700;
    font-style: oblique;
    line-height: 1.1667;
  `,
  [TypographyVariant.TITLE_4]: css`
    font-size: 18px;
    font-weight: 700;
    font-style: oblique;
    line-height: 1.223;
  `,
  [TypographyVariant.TEXT_1]: css`
    font-weight: 400;
    font-size: 16px;
    line-height: 1.75;
  `,
  [TypographyVariant.TEXT_2]: css`
    font-weight: 400;
    font-size: 14px;
    line-height: 1.2143;
  `,
  [TypographyVariant.TEXT_3]: css`
    font-weight: 400;
    font-size: 12px;
    line-height: 1.334;
  `,
};

const StyledTypography = styled.div<TypographyProps>(({ $color, variant }) => {
  const defaultColor = $color || Color.GRAY_90;

  return css`
    ${TypographyVariantToCSS[variant]}

    color: ${defaultColor};
  `;
});

export { StyledTypography as Typography, TypographyVariant };
