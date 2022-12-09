import { Container, Logo } from '../../shared';
import { NavList } from './nav-list';

import * as S from './styles';

export function HeaderSection(): JSX.Element {
  return (
    <S.Header>
      <Container>
        <S.HeaderWrapper>
          <Logo width={81} height={41} />
          <NavList />
        </S.HeaderWrapper>
      </Container>
    </S.Header>
  );
}
