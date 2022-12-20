import { Container, Logo } from '../../shared';
import { NavList } from './nav-list';

import * as S from './styles';

export function HeaderSection(): JSX.Element {
  return (
    <S.Header>
      <Container>
        <S.HeaderWrapper>
          <Logo />
          <NavList />
        </S.HeaderWrapper>
      </Container>
    </S.Header>
  );
}
