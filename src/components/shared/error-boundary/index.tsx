import { Component, ReactNode } from 'react';

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
  return <div>Something went wrong</div>;
}
