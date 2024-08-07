import { css } from '@emotion/react';

const enum Color {
  ORANGE_10 = 'var(--color-orange-10)',
  BLUE_20 = 'var(--color-blue-20)',
  BLUE_30 = 'var(--color-blue-30)',
  WHITE = 'var(--color-white)',
  GRAY_10 = 'var(--color-gray-10)',
  GRAY_20 = 'var(--color-gray-20)',
  GRAY_30 = 'var(--color-gray-30)',
  GRAY_40 = 'var(--color-gray-40)',
  GRAY_50 = 'var(--color-gray-50)',
  GRAY_60 = 'var(--color-gray-60)',
  GRAY_70 = 'var(--color-gray-70)',
  GRAY_80 = 'var(--color-gray-80)',
  GRAY_90 = 'var(--color-gray-90)',
  BLACK = 'var(--color-black)',
}

const globalColors = css`
  :root {
    --color-orange-10: #ff9000;

    --color-blue-20: #4481c3;
    --color-blue-30: #3069a6;

    --color-white: #ffffff;

    --color-gray-10: #f5f5f5;
    --color-gray-20: #f2f2f2;
    --color-gray-30: #dfdfdf;
    --color-gray-40: #c7c7c7;
    --color-gray-50: #9b9b9b;
    --color-gray-60: #818181;
    --color-gray-70: #5d5d5d;
    --color-gray-80: #696969;
    --color-gray-90: #383838;

    --color-black: #000000;
  }
`;

export { Color, globalColors };
