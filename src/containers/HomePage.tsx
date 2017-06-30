import * as React from 'react';
import { connect } from 'react-redux';
// import { RouteComponentProps, withRouter } from 'react-router-dom';

import AnimeList from '../components/Anime/List';
import { Animes, AnimeState } from '../types';

// interface HomeProps extends RouteComponentProps<any> {
//   match: any;
//   history: any;
//   location: any;
//   animes: Animes;
// }

interface HomeProps {
  match: any;
  history: any;
  location: any;
  animes: Animes;
}

class HomePage extends React.Component<HomeProps, {}> {
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
