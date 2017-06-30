import * as React from 'react';

import { Animes } from '../../../types';

const SearchResults = ({ animes }: { animes: Animes }) => (
  <section className="search-results">
    {animes.map(anime => (
      <div className="search-result" key={anime.id}>
        <img src={anime.imageUrl} width="50px" />
        <span>{anime.title}</span>
        <span className="score">{anime.score}</span>
      </div>
    ))}
  </section>
);

export default SearchResults;
