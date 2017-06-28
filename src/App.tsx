import * as React from 'react';
import { Provider } from 'react-redux';

import store from './configureStore';
import './App.css';
import Header from './components/Header';
import HomePage from './containers/HomePage';

class App extends React.Component<{}, {}> {
  render() {
    return (
      <Provider store={store}>
        <div className="app">
          <Header />
          <HomePage />
        </div>
      </Provider>
    );
  }
}

export default App;
