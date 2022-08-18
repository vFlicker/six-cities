import { Component, ReactNode } from 'react';

import { ErrorIndicator } from '../error-indicator';

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
