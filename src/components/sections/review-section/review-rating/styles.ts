import styled from '@emotion/styled';

import { visuallyHidden } from '../../../styles/visually-hidden';

export const Rating = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  align-items: flex-start;
  margin-bottom: 21px;
`;

export const Input = styled.input`
  ${visuallyHidden};

  &:checked ~ label svg,
  &:focus ~ label svg {
    fill: #ff9000;
  }
`;

export const Label = styled.label`
  &:hover svg,
  &:hover ~ & svg {
    fill: #ff9000;
  }
`;

export const Image = styled.svg`
  fill: #c7c7c7;
  transition: fill 0.3s;
`;
