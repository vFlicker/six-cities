import { Logo } from '../../shared/logo/logo';

import * as S from './styles';

export function FooterSection(): JSX.Element {
  return (
    <S.Footer>
      <S.FooterContainer>
        <Logo width={64} height={33} />
      </S.FooterContainer>
    </S.Footer>
  );
}
