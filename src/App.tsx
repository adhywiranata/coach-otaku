import * as React from 'react';

import './App.css';
import Header from './components/Header';
import HomePage from './containers/HomePage';

class App extends React.Component<{}, {}> {
  render() {
    return (
      <div className="app">
        <Header />
        <HomePage />
      </div>
    );
  }
}

export default App;
