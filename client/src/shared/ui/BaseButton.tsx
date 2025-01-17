import styled from '@emotion/styled';

import { withAttrs } from './withAttrs';

const StyledBaseButton = withAttrs(
  {
    type: 'button',
  },
  styled.button`
    display: inline-block;
    padding: 0;
    background: 0 0;
    border: none;
    text-decoration: none;
    font: inherit;
    text-align: center;
    word-break: break-word;
    word-wrap: wrap;
    overflow-wrap: break-word;
    transition:
      color 0.3s,
      background-color 0.3s;
    cursor: pointer;

    &:disabled {
      cursor: not-allowed;
    }
  `,
);

export { StyledBaseButton as BaseButton };
