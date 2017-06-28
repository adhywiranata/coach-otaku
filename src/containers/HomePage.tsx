import * as React from 'react';
import { connect } from 'react-redux';

import AnimeList from '../components/Anime/List';
import { Anime } from '../types';

interface StateType {
  animes: [Anime];
}

class HomePage extends React.Component<{ yo: string }> {
  state: StateType;
  constructor() {
    super();
    this.state = {
      animes: [
        {
          id: 1,
          title: 'Boku No Hero Academia',
          linkCanonical: '',
          synopsis: '',
          type: '',
          episodes: 24,
          status: 'Airing',
          aired: '',
          producer: ['Sunrise'],
          studio: ['Sunrise'],
          genre: [['Shounen'], ['Seinen'], ['Action']],
          score: [8.9],
          ranked: 1,
          popularity: 2453,
          openingTheme: ['yeah'],
          endingTheme: ['wow'],
        },
      ],
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

const mapStateToProps = (state: { yo: string }) => ({
  yo: state.yo,
});

const mapDispatchToProps = (dispatch: {}) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
