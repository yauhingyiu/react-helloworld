import React from 'react';
import Nav from 'react-bootstrap/Nav';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error: error };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error("Uncaught error:", error, errorInfo);
    this.setState({ errorInfo: errorInfo });
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      console.log(this.state.error.componentStack);
      return (
        <div style={{ padding: '20px', border: '1px solid red', color: 'red' }}>
          <h2>Something went wrong!</h2>
          <p>{this.state.error && this.state.error.message}</p>
          <p>{this.state.errorInfo && this.state.errorInfo.componentStack}</p>
          
          {/* Optionally, you can add a button to reset the error state */}
          <button onClick={() => this.setState({ hasError: false, error: null })}>
            Try again
          </button>
          <Nav.Link href="/home/">Home</Nav.Link>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;