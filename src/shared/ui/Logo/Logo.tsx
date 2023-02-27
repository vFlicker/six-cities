import { ComponentPropsWithoutRef } from 'react';

import { logoIconSrc } from '~/shared/assets/images';

type LogoProps = ComponentPropsWithoutRef<'img'>;

export function Logo(props: LogoProps): JSX.Element {
  return <img src={logoIconSrc} alt="6 cities logo" {...props} />;
}
