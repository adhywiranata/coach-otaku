import * as React from 'react';
import { Provider } from 'react-redux';

import store from './configureStore';
import './App.css';
import Header from './components/Header';
import HomePage from './containers/HomePage';
import Navbar from './components/core/Navbar';
import Overlay from './components/core/Navbar/Overlay';

interface StateTypes {
  isNavbarActive: boolean;
}

class App extends React.Component<{}, StateTypes> {
  constructor() {
    super();
    this.state = {
      isNavbarActive: false,
    };

    this.toggleNavbar = this.toggleNavbar.bind(this);
  }

  toggleNavbar(): void {
    this.setState({
      isNavbarActive: !this.state.isNavbarActive,
    });
  }

  render() {
    return (
      <Provider store={store}>
        <div className="app">
          <Navbar isNavbarActive={this.state.isNavbarActive} toggleNavbar={this.toggleNavbar} />
          <Overlay isNavbarActive={this.state.isNavbarActive} toggleNavbar={this.toggleNavbar} />
          <Header toggleNavbar={this.toggleNavbar} />
          <HomePage />
        </div>
      </Provider>
    );
  }
}

export default App;
