import * as React from 'react';
import { connect } from 'react-redux';

import './search.css';
import { Animes } from '../../../types';
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

const mapStateToProps = ({ animes }: { animes: Animes }): any => {
  return {
    animes,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchSection);
