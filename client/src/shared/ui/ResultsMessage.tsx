import styled from '@emotion/styled';

import { withAttrs } from '~/helpers/withAttrs';
import { Typography, TypographyVariant } from '~/shared/ui/Typography';

type ResultMessageProps = {
  title: string;
  message: string;
  image?: string;
  alt?: string;
  className?: string;
};

export function ResultMessage({
  className,
  title,
  message,
  image,
  alt,
}: ResultMessageProps): JSX.Element {
  return (
    <StyledWrapper className={className}>
      {image && <StyledImage src={image} alt={alt} />}
      <StyledTitle>{title}</StyledTitle>
      <StyledMessage>{message}</StyledMessage>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  max-width: 480px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const StyledImage = styled.img`
  margin-bottom: 10px;
`;

const StyledTitle = withAttrs(
  {
    as: 'h1',
    variant: TypographyVariant.TITLE_2,
  },
  styled(Typography)`
    margin: 0 0 5px;
  `,
);

const StyledMessage = withAttrs(
  {
    as: 'p',
    variant: TypographyVariant.TEXT_2,
  },
  styled(Typography)`
    max-width: 360px;
  `,
);
