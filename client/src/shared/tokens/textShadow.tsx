import { css } from '@emotion/react';

const enum TextShadow {
  SHADOW_1 = 'var(--text-shadow-1)',
}

const globalTextShadows = css`
  :root {
    --text-shadow-1: 0.1px 0 0, -0.1px 0 0;
  }
`;

export { globalTextShadows, TextShadow };
