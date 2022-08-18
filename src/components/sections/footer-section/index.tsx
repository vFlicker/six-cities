import { Link } from 'react-router-dom';

import { AppRoute } from '@/constants';

import * as S from './styles';

export function FooterSection(): JSX.Element {
  return (
    <footer className="footer">
      <S.FooterContainer>
        <Link to={AppRoute.ROOT} className="footer__logo-link">
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width="64"
            height="33"
          />
        </Link>
      </S.FooterContainer>
    </footer>
  );
}
