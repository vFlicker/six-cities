import { JSX } from 'react';

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
    <div className={className}>
      <span className="mr-1 text-sm">{text}</span>
      <TextLink
        href={href}
        aria-label={label}
        className="text-blue-20 underline"
      >
        {label}
      </TextLink>
    </div>
  );
}
