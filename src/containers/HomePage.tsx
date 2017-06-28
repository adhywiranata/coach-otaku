import * as React from 'react';
import { connect } from 'react-redux';

import AnimeList from '../components/Anime/List';
import { Anime } from '../types';

interface Animes {
  data: [Anime];
  isFetching: boolean;
}

class HomePage extends React.Component<{ animes: [Anime] }> {

  render() {
    return (
      <section className="app-wrapper">
        <h1>Animes for You</h1>
        <AnimeList animes={this.props.animes} />
      </section>
    );
  }
}

const mapStateToProps = (state: { animes: Animes }) => {
  console.log(state.animes)
  return {
    animes: state.animes.data,
  }
};

const mapDispatchToProps = (dispatch: {}) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
