import * as React from 'react';

import './App.css';
import Header from './components/Header';

class App extends React.Component<{}, {}> {
  render() {
    return (
      <div className="App">
        <Header />
        <p className="App-intro">
          Complete Anime List Directory
        </p>
      </div>
    );
  }
}

export default App;
