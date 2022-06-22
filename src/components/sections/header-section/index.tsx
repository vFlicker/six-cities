import { Link } from 'react-router-dom';

import { AppRoute } from '@/constants';

import { Container, Logo } from '../../shared';
import { NavList } from './nav-list';
import * as S from './styles';

export function SectionHeader(): JSX.Element {
  return (
    <S.Header>
      <Container>
        <S.HeaderWrapper>
          <S.HeaderLeft>
            {/* TODO: react-router-dom with styled components */}
            <Link to={AppRoute.ROOT} className="header__logo-link header__logo-link--active">
              <Logo />
            </Link>
          </S.HeaderLeft>
          <NavList />
        </S.HeaderWrapper>
      </Container>
    </S.Header>
  );
}
