import { logoIconSrc } from '~/assets/images';

import * as S from './styles';

export function Logo(): JSX.Element {
  return (
    <S.Logo src={logoIconSrc} width="81" height="41" alt="6 cities logo" />
  );
}
