import { Container, NotificationSection } from '../styles';

import * as S from './styles';

type ErrorMessageProps = {
  errorMessage?: string;
};

export function ErrorMessage({ errorMessage }: ErrorMessageProps): JSX.Element {
  const error = errorMessage ?? 'There are problems, please try again later.';
  return (
    <NotificationSection>
      <Container>
        <S.Title>{error}</S.Title>
      </Container>
    </NotificationSection>
  );
}
