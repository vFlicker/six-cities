import { JSX } from 'react';

import { cn } from '~/shared/lib/css';

import { TextLink } from '../atoms';

type AuthRedirectProps = {
  href: string;
  text: string;
  label: string;
  className?: string;
};

export function AuthRedirect({
  className,
  label,
  href,
  text,
}: AuthRedirectProps): JSX.Element {
  return (
    <div className={cn(className)}>
      <span className={textClasses}>{text}</span>
      <TextLink href={href} aria-label={label} className={linkClasses}>
        {label}
      </TextLink>
    </div>
  );
}

const textClasses = cn('mr-1 text-sm');
const linkClasses = cn('text-blue-20 underline');
