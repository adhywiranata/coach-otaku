import * as React from 'react';
import { Link } from 'react-router-dom';

import { Animes } from '../../../types';

const SearchResults = ({ animes, toggleSearch }: { animes: Animes; toggleSearch: () => void }) => (
  <section className="search-results">
    {animes.map(anime => (
      <Link
        to={`/anime/${anime.id}`}
        onClick={toggleSearch}
        key={anime.id}
        style={{ textDecoration: 'none', color: '#353535' }}
      >
        <div className="search-result">
          <img src={anime.imageUrl} width="50px" />
          <span>{anime.title}</span>
          <span className="score">{anime.score}</span>
        </div>
      </Link>
    ))}
  </section>
);

export default SearchResults;
