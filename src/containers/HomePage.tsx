import * as React from 'react';

import AnimeList from '../components/Anime/List';

interface StateType {
  animes: [number],
};

class HomePage extends React.Component {
  state: StateType
  constructor() {
    super();
    this.state = {
      animes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    };
  }
  render() {
    return (
      <section className="app-wrapper">
        <h1>Animes for You</h1>
        <AnimeList animes={this.state.animes} />
      </section>
    );
  }
}

export default HomePage;
