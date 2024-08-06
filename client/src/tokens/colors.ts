import { css } from '@emotion/react';

const enum Color {
  BLUE_20 = 'var(--color-blue-20)',
  BLUE_40 = 'var(--color-blue-40)',
  WHITE = 'var(--color-white)',
  GRAY_20 = 'var(--color-gray-20)',
  GRAY_40 = 'var(--color-gray-40)',
  GRAY_80 = 'var(--color-gray-80)',
}

const globalColors = css`
  :root {
    --color-blue-20: #4481c3;
    --color-blue-40: #3069a6;

    --color-white: #ffffff;

    --color-gray-20: #f5f5f5;
    --color-gray-40: #c7c7c7;
    --color-gray-80: #383838;
  }
`;

export { Color, globalColors };
