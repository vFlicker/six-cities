import { useLocation } from 'react-router-dom';

import { logoIconSrc } from '~/assets/images';
import { AppRoute } from '~/constants';

import * as S from './styles';

type LogoLinkProps = {
  width: number;
  height: number;
};

export function LogoLink({ ...props }: LogoLinkProps): JSX.Element {
  const location = useLocation();
  const logoAlt = '6 cities logo';

  if (location.pathname !== AppRoute.Root) {
    return (
      <S.Link to={AppRoute.Root}>
        <S.Logo src={logoIconSrc} {...props} alt={logoAlt} />
      </S.Link>
    );
  }

  return <S.Logo src={logoIconSrc} {...props} alt={logoAlt} />;
}
