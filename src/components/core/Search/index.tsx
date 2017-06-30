import * as React from 'react';

import './search.css';

export default ({ isSearchActive, toggleSearch }: { isSearchActive: boolean; toggleSearch: any; }) => (
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
    <section className="search-results">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(item => (
        <div className="search-result">
          <img src="https://myanimelist.cdn-dena.com/images/anime/12/85221.jpg" width="50px" />
          <span>Kimi no Nawa</span>
          <span className="score">9.08</span>
        </div>
      ))}
    </section>
  </div>
);
