import * as React from 'react';
import { connect } from 'react-redux';

import './search.css';
import { Animes, AnimeState } from '../../../types';
import SearchResults from './SearchResults';

interface OwnProps {
  isSearchActive: boolean;
  toggleSearch: any;
}

interface StateToProps {
  animes: AnimeState;
  animeSearchKeyword: string;
  filteredAnimes: Animes;
}

interface DispatchToProps {}

class SearchSection extends React.Component<StateToProps & DispatchToProps & OwnProps, {}> {
  render() {
    const { isSearchActive, toggleSearch, filteredAnimes } = this.props;
    return (
      <div className="search-container" style={{ top: isSearchActive ? 0 : '100vh' }}>
        <header>
          <span>Search for Animes</span>
          <img src={require('./close.png')} width="20px" onClick={toggleSearch} />
        </header>
        <section className="search-form">
          <form>
            <input type="text" placeholder="search for titles.." />
            <button>x</button>
          </form>
        </section>
        <SearchResults animes={filteredAnimes} />
      </div>
    );
  }
}

const mapStateToProps = ({ animes, animeSearchKeyword }: StateToProps): any => {
  return {
    filteredAnimes: animes.data.filter(anime => anime.title.includes(animeSearchKeyword)),
  };
};

const mapDispatchToProps = (dispatch: any): DispatchToProps => {
  return {};
};

export default connect<StateToProps, DispatchToProps, OwnProps>(
  mapStateToProps,
  mapDispatchToProps
)(SearchSection as any);
