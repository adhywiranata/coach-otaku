import * as React from 'react';

import './App.css';
import Header from './components/Header';

class App extends React.Component<{}, {}> {
  render() {
    return (
      <div className="app">
        <Header />
        <p className="app-intro">
          Super Complete Anime List Directory
        </p>
      </div>
    );
  }
}

export default App;
