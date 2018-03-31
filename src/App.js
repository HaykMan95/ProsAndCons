import React, { Component } from 'react';
import ProsCons from './containers/ProsCons';
import ErrorBoundary from './containers/ErrorBoundary';
import './App.css';

class App extends Component {
  render() {
    return (
      <ErrorBoundary>
        <ProsCons />
      </ErrorBoundary>      
    );
  }
}

export default App;
