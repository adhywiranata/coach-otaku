import * as React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import store from './configureStore';
import './App.css';
import Header from './components/Header';
import HomePage from './containers/HomePage';
import DetailPage from './containers/DetailPage';
import Navbar from './components/core/Navbar';
import Overlay from './components/core/Navbar/Overlay';
import Search from './components/core/Search';

console.log(ConnectedRouter);

const history = createHistory();

interface StateTypes {
  isNavbarActive: boolean;
  isSearchActive: boolean;
}

class App extends React.Component<{}, StateTypes> {
  constructor() {
    super();
    this.state = {
      isNavbarActive: false,
      isSearchActive: false,
    };

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.toggleSearch = this.toggleSearch.bind(this);
  }

  toggleNavbar(): void {
    this.setState({
      isNavbarActive: !this.state.isNavbarActive,
    });
  }

  toggleSearch(): void {
    this.setState({
      isSearchActive: !this.state.isSearchActive,
    });
  }

  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div className="app">
            <Search isSearchActive={this.state.isSearchActive} toggleSearch={this.toggleSearch} />
            <Navbar isNavbarActive={this.state.isNavbarActive} toggleNavbar={this.toggleNavbar} />
            <Overlay isNavbarActive={this.state.isNavbarActive} toggleNavbar={this.toggleNavbar} />
            <Header toggleNavbar={this.toggleNavbar} toggleSearch={this.toggleSearch} />
            <Switch>
              <Route exact={true} path="/" component={(props: any) => <HomePage {...props} />} />
              <Route exact path="/anime/:id" component={(props: any) => <DetailPage {...props} />} />
            </Switch>
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
