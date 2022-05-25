import { PropsWithChildren } from 'react';
import styled from '@emotion/styled';

type ButtonProps = PropsWithChildren<{
  fullWidth?: boolean;
}> & JSX.IntrinsicElements['button'];

export function Button({
  children,
  fullWidth = false,
}: ButtonProps): JSX.Element {
  return (
    <ButtonStyled data-full-width={fullWidth}>
      {children}
    </ButtonStyled>
  );
}

const ButtonStyled = styled.button`
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
