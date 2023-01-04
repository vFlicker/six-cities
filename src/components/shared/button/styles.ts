import styled from '@emotion/styled';

type ButtonProps = {
  fullWidth: boolean;
};

export const Button = styled.button<ButtonProps>`
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};

  padding: 14px 38px 14px;
  color: #fff;
  background-color: #4481c3;
  border-radius: 3px;

  &:focus,
  &:hover {
    background-color: #3069a6;
  }

  &:disabled {
    background-color: #c7c7c7;
  }
`;
