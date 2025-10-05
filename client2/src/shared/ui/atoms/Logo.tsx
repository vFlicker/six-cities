import Image from 'next/image';
import Link from 'next/link';
import { JSX } from 'react';

import { cn } from '~/shared/lib/css';
import { AppRoute } from '~/shared/lib/router';

type LogoProps = {
  width?: number;
  height?: number;
  className?: string;
};

export function Logo({
  className,
  width = 128,
  height = 22,
}: LogoProps): JSX.Element {
  return (
    <Link className={cn(className)} href={AppRoute.Home}>
      <Image
        src="/icons/logo.svg"
        width={width}
        height={height}
        alt="6 cities logotype"
      />
    </Link>
  );
}
