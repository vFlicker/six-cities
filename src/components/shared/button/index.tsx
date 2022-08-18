import { PropsWithChildren } from 'react';

import * as S from './styles';

type ButtonProps = PropsWithChildren<{
  fullWidth?: boolean;
}> &
  JSX.IntrinsicElements['button'];

export function Button({
  children,
  fullWidth = false,
}: ButtonProps): JSX.Element {
  return <S.Button data-full-width={fullWidth}>{children}</S.Button>;
}
