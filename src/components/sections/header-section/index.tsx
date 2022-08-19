import { AppRoute } from '~/constants';

import { Container } from '../../shared';
import { LogoLink } from './logo-link';
import { NavList } from './nav-list';

import * as S from './styles';

export function SectionHeader(): JSX.Element {
  return (
    <S.Header>
      <Container>
        <S.HeaderWrapper>
          <LogoLink to={AppRoute.Root} />
          <NavList />
        </S.HeaderWrapper>
      </Container>
    </S.Header>
  );
}
