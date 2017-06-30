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

interface DispatchToProps {
  setSearchKeyword: any;
  resetSearchKeyword: any;
}

class SearchSection extends React.Component<StateToProps & DispatchToProps & OwnProps, {}> {
  constructor(props: any) {
    super(props);

    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.handleResetSearchKeyword = this.handleResetSearchKeyword.bind(this);
  }

  handleSearchInput(e: any): void {
    this.props.setSearchKeyword(e.target.value);
  }

  handleResetSearchKeyword(e: any): void {
    this.props.resetSearchKeyword();
  }

  render() {
    const { isSearchActive, toggleSearch, filteredAnimes, animeSearchKeyword } = this.props;
    return (
      <div className="search-container" style={{ top: isSearchActive ? 0 : '100vh' }}>
        <header>
          <span>Search for Animes</span>
          <img src={require('./close.png')} width="20px" onClick={toggleSearch} />
        </header>
        <section className="search-form">
          <form onSubmit={(e) => e.preventDefault() }>
            <input
              type="text"
              placeholder="search for titles.."
              onChange={this.handleSearchInput}
              value={animeSearchKeyword}
            />
            <button onClick={this.handleResetSearchKeyword}>x</button>
          </form>
        </section>
        <SearchResults animes={filteredAnimes} toggleSearch={toggleSearch} />
      </div>
    );
  }
}

const mapStateToProps = ({ animes, animeSearchKeyword }: StateToProps): any => {
  return {
    filteredAnimes: animes.data.filter(anime => anime.title.toLowerCase().includes(animeSearchKeyword.toLowerCase())),
    animeSearchKeyword,
  };
};

const mapDispatchToProps = (dispatch: any): DispatchToProps => {
  return {
    setSearchKeyword: (searchKeyword: string) => dispatch({ type: 'SET_SEARCH_KEYWORD', payload: searchKeyword }),
    resetSearchKeyword: () => dispatch({ type: 'RESET_SEARCH_KEYWORD' }),
  };
};

export default connect<StateToProps, DispatchToProps, OwnProps>(
  mapStateToProps,
  mapDispatchToProps
)(SearchSection as any);
