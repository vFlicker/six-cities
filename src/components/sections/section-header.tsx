import { Link } from 'react-router-dom';

import { logoIconSrc } from '@/assets/images';
import { AppRoute } from '@/constants';

import { HeaderNavList } from '../header-nav-list';
import { Container } from '../shared';

export function SectionHeader(): JSX.Element {
  return (
    <header className="header">
      <Container>
        <div className="header__wrapper">
          <div className="header__left">
            <Link to={AppRoute.ROOT} className="header__logo-link header__logo-link--active">
              <img className="header__logo" src={logoIconSrc} alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          <nav className="header__nav">
            <HeaderNavList />
          </nav>
        </div>
      </Container>
    </header>
  );
}
