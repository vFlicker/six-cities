import { ComponentProps, PropsWithChildren } from 'react';

import * as S from './styles';

type ButtonProps = PropsWithChildren<{
  fullWidth?: boolean;
}> &
  ComponentProps<'button'>;

export function Button({
  children,
  fullWidth = false,
  ...props
}: ButtonProps): JSX.Element {
  return (
    <S.Button fullWidth={fullWidth} {...props}>
      {children}
    </S.Button>
  );
}
