import * as React from 'react';

const SearchResults = () => (
  <section className="search-results">
    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(item => (
      <div className="search-result" key={item}>
        <img src="https://myanimelist.cdn-dena.com/images/anime/12/85221.jpg" width="50px" />
        <span>Kimi no Nawa</span>
        <span className="score">9.08</span>
      </div>
    ))}
  </section>
);

export default SearchResults;
