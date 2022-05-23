import { Link } from 'react-router-dom';

import { AppRoute } from '@/constants';

import { HeaderNavList } from '../header-nav-list';
import { logoIcon } from '@/assets/images';

export function SectionHeader(): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to={AppRoute.ROOT} className="header__logo-link header__logo-link--active">
              <img className="header__logo" src={logoIcon} alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          <nav className="header__nav">
            <HeaderNavList />
          </nav>
        </div>
      </div>
    </header>
  );
}
