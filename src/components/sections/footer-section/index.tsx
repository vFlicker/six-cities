import { LogoLink } from '../../shared';

import * as S from './styles';

export function FooterSection(): JSX.Element {
  return (
    <S.Footer>
      <S.FooterContainer>
        <LogoLink width={64} height={33} />
      </S.FooterContainer>
    </S.Footer>
  );
}
