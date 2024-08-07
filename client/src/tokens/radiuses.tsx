import { css } from '@emotion/react';

const enum Radius {
  RADIUS_2 = 'var(--radios-2)',
  RADIUS_3 = 'var(--radius-3)',
  RADIUS_4 = 'var(--radius-4)',
  RADIUS_15 = 'var(--radius-15)',
  RADIUS_50 = 'var(--radius-50)',
}

const globalRadiuses = css`
  :root {
    --radios-2: 2px;
    --radius-3: 3px;
    --radius-4: 4px;
    --radius-15: 15px;
    --radius-50: 50%;
  }
`;

export { globalRadiuses, Radius };
