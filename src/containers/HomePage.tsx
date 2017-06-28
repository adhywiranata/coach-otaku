import * as React from 'react';
import { connect } from 'react-redux';

import AnimeList from '../components/Anime/List';
import { Animes, AnimeState } from '../types';

class HomePage extends React.Component<{ animes: Animes }> {
  render() {
    return (
      <section className="app-wrapper">
        <h1>Animes for You</h1>
        <AnimeList animes={this.props.animes} />
      </section>
    );
  }
}

const mapStateToProps = (state: { animes: AnimeState }) => {
  return {
    animes: state.animes.data,
  };
};

const mapDispatchToProps = (dispatch: {}) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
