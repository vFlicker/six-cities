import { useLocation } from 'react-router-dom';

import { logoIconSrc } from '~/assets/images';
import { AppRoute } from '~/constants';

import * as S from './styles';

type LogoProps = {
  width?: number;
  height?: number;
};

export function Logo({
  width = 81,
  height = 41,
  ...props
}: LogoProps): JSX.Element {
  const location = useLocation();
  const logoAlt = '6 cities logo';

  if (location.pathname !== AppRoute.Root) {
    return (
      <S.Link to={AppRoute.Root}>
        <S.Logo
          src={logoIconSrc}
          width={width}
          height={height}
          {...props}
          alt={logoAlt}
        />
      </S.Link>
    );
  }

  return (
    <S.Logo
      src={logoIconSrc}
      width={width}
      height={height}
      {...props}
      alt={logoAlt}
    />
  );
}
