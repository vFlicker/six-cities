import styled from '@emotion/styled';

import { Color } from '~/shared/theme/colors';

import { Typography, TypographyVariant } from './Typography';
import { withAttrs } from './withAttrs';

type ErrorBlockProps = {
  className?: string;
  message?: string;
};

function ErrorBlock({ className, message }: ErrorBlockProps): JSX.Element {
  return <StyledText className={className}>{message}</StyledText>;
}

export { ErrorBlock };

const StyledText = withAttrs(
  {
    as: 'p',
    variant: TypographyVariant.TEXT_2,
  },
  styled(Typography)`
    color: ${Color.RED_10};
  `,
);
