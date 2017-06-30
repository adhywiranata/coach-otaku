import * as React from 'react';
import { connect } from 'react-redux';
// import { RouteComponentProps, withRouter } from 'react-router-dom';

import database from '../config/database';
import { getAnimeDetail } from '../config/jikanAPI';

import AnimeList from '../components/Anime/List';
import { Animes, AnimeState } from '../types';

// interface HomeProps extends RouteComponentProps<any> {
//   match: any;
//   history: any;
//   location: any;
//   animes: Animes;
// }

interface HomeStates {
  hasReachedBottom: boolean;
}

interface HomeProps {
  match: any;
  history: any;
  location: any;
  animes: Animes;
  isFetching: boolean;
}

class HomePage extends React.Component<HomeProps, HomeStates> {
  constructor(props: any) {
    super(props);
    this.state = {
      hasReachedBottom: false,
    }
  }

  componentDidMount(): void {
    database.ref('animes').once('value').then((animesSnapshot: any) => {
      console.log(animesSnapshot.val());
      const promiseResolveIterables = animesSnapshot.val().map((anime: any) => getAnimeDetail(anime.id));
      Promise.all(promiseResolveIterables).then(values => {
        console.log(values);
      })
      // console.log(promiseIterables);
      // getAnimeDetail(animesSnapshot.val()[0].id).then(res => console.log(res));
    });
    window.addEventListener('scroll', (e) => {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        this.setState({ hasReachedBottom: true }, () => {
          setTimeout(() => { this.setState({ hasReachedBottom: false }), 1000 })
        });
      }
    });
  }

  render() {
    return (
      <section className="app-wrapper">
        <h1>Animes for You</h1>
        <AnimeList animes={this.props.animes} />
        {this.props.isFetching && <div style={{ padding: 30, fontWeight: 'bold' }}>LOADING ANIMES...</div>}
        {this.state.hasReachedBottom && <div style={{ padding: 30, fontWeight: 'bold' }}>LOADING...</div>}
      </section>
    );
  }
}

const mapStateToProps = (state: { animes: AnimeState }) => {
  return {
    animes: state.animes.data,
    isFetching: state.animes.isFetching,
  };
};

const mapDispatchToProps = (dispatch: {}) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
