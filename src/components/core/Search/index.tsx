import * as React from 'react';

import './search.css';
import SearchResults from './SearchResults';

interface PropTypes {
  isSearchActive: boolean;
  toggleSearch: any;
}

class SearchSection extends React.Component<PropTypes, {}> {
  render() {
    const { isSearchActive, toggleSearch } = this.props;
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
        <SearchResults />
      </div>
    );
  }
}

export default SearchSection;
