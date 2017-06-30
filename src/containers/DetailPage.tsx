import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import AnimeItem from '../components/Anime/Item';
import { Anime, AnimeState } from '../types';

interface DetailProps {
  match: any;
  history: any;
  location: any;
  anime: Anime;
}

class DetailPage extends React.Component<DetailProps, {}> {
  render() {
    return (
      <section className="app-wrapper">
        { this.props.anime ? (
          <div>
            <h1>{this.props.anime.title}</h1>
            <AnimeItem {...this.props.anime} />
          </div>
        ) : (
          <div>
            <h1>No Anime Found</h1>
            <Link to="/" style={{ textDecoration: 'none' }}>Back to Home</Link>
          </div>
        ) }
      </section>
    );
  }
}

const mapStateToProps = (state: { animes: AnimeState; router: any; }) => {
  const animeId = parseInt(state.router.location.pathname.split('/').reverse()[0]);
  const filteredAnime = state.animes.data.filter((anime) => anime.id === animeId);
  const anime = filteredAnime.length > 0 ? filteredAnime[0] : null;
  return {
    anime,
  };
};

const mapDispatchToProps = (dispatch: {}) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(DetailPage);
