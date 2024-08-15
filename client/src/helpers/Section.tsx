import styled from '@emotion/styled';
import { PropsWithChildren } from 'react';

import { Typography, TypographyVariant } from '~/elements/Typography';

import { withAttrs } from './withAttrs';

type SectionProps = PropsWithChildren<{
  title: string;
  className?: string;
}>;

const StyledSection = styled.section`
  display: grid;
  gap: 24px;
`;

const StyledTitle = withAttrs(
  {
    as: 'h2',
    variant: TypographyVariant.TITLE_3,
  },
  Typography,
);

function Section({ className, title, children }: SectionProps): JSX.Element {
  return (
    <StyledSection className={className}>
      <StyledTitle>{title}</StyledTitle>
      {children}
    </StyledSection>
  );
}

export { Section };
