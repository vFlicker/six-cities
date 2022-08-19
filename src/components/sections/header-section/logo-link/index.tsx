import { useLocation } from 'react-router-dom';

import { AppRoute } from '~/constants';

import { Logo } from '../../../shared';

import * as S from './styles';

type LogoLinkProps = {
  to: AppRoute;
};

export function LogoLink({ to }: LogoLinkProps): JSX.Element {
  const location = useLocation();

  if (location.pathname !== AppRoute.Root) {
    return (
      <S.Link to={to}>
        <Logo />
      </S.Link>
    );
  }

  return <Logo />;
}
