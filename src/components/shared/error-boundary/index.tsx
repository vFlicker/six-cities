import { Component, ReactNode } from 'react';

import { GlobalError } from './global-error';

type ErrorBoundaryProps = {
  children: ReactNode;
  errorComponent?: JSX.Element;
};

type ErrorBoundaryState = {
  hasError: boolean;
};

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  state = {
    hasError: false,
  };

  componentDidCatch(): void {
    this.setState({ hasError: true });
  }

  render(): ReactNode {
    const { hasError } = this.state;
    const { errorComponent } = this.props;

    if (hasError) return errorComponent || <GlobalError />;
    return this.props.children;
  }
}
