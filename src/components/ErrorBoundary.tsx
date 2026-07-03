import { Component, type ErrorInfo, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Unhandled render error:', error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="page__main not-found" id="main">
          <h1 className="not-found__title">Something went wrong</h1>
          <p className="not-found__text">Please refresh the page and try again.</p>
        </main>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
