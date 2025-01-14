import styled from '@emotion/styled';
import { PropsWithChildren } from 'react';

import { Typography, TypographyVariant } from '~/shared/ui/Typography';

import { SmallContainerMixin } from '../../../shared/ui/Container';
import { withAttrs } from '../../../shared/ui/withAttrs';

type SectionProps = PropsWithChildren<{
  title: string;
  className?: string;
}>;

function Section({ className, title, children }: SectionProps): JSX.Element {
  return (
    <StyledSection className={className}>
      <StyledTitle>{title}</StyledTitle>
      {children}
    </StyledSection>
  );
}

export { Section };

const StyledSection = styled.section`
  ${SmallContainerMixin}

  display: grid;
  gap: 24px;
`;

const StyledTitle = withAttrs(
  {
    as: 'h2',
    variant: TypographyVariant.TITLE_3,
  },
  styled(Typography)`
    margin-left: auto;
    margin-right: auto;
  `,
);
