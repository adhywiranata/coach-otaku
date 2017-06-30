import * as React from 'react';
import { connect } from 'react-redux';

import AnimeList from '../components/Anime/List';
import { Animes, AnimeState } from '../types';

interface DetailProps {
  match: any;
  history: any;
  location: any;
  animes: Animes;
}

class DetailPage extends React.Component<DetailProps, {}> {
  render() {
    return (
      <section className="app-wrapper">
        <h1>Boku No Hero</h1>
        <AnimeList animes={this.props.animes} />
      </section>
    );
  }
}

const mapStateToProps = (state: { animes: AnimeState }) => {
  return {
    animes: state.animes.data.filter((anime, index) => index === 0),
  };
};

const mapDispatchToProps = (dispatch: {}) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(DetailPage);
