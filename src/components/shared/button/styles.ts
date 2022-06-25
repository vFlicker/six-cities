import styled from '@emotion/styled';

export const Button = styled.button`
  & {
    padding: 14px 38px 14px;
    color: #fff;
    background-color: #4481c3;
    border-radius: 3px;
  }

  &:focus,
  &:hover {
    background-color: #3069a6;
  }

  &:disabled {
    background-color: #c7c7c7;
  }

  &[data-full-width='true'] {
    width: 100%;
  }
`;
