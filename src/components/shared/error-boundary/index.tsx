import { Component, ReactNode } from 'react';

import * as S from './styles';

export class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };

  componentDidCatch(): void {
    this.setState({ hasError: true });
  }

  render(): ReactNode {
    if (this.state.hasError) return <ErrorIndicator />;

    return this.props.children;
  }
}

function ErrorIndicator(): JSX.Element {
  return <S.Text>Something went wrong</S.Text>;
}
