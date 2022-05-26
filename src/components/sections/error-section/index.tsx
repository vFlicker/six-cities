import { Container, SectionWithBorder } from '../../shared';

// TODO: Add error from API answer here
export function ErrorSection(): JSX.Element {
  return (
    <SectionWithBorder>
      <Container>
        <h1 className="error__title">There are problems, please try again later.</h1>
      </Container>
    </SectionWithBorder>
  );
}
