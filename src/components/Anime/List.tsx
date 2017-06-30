import * as React from 'react';

import './anime.css';
import { Animes } from '../../types';

import Item from './Item';

interface PropTypes {
  animes: Animes;
}

export default ({ animes }: PropTypes) => (
  <section className="anime-list">
    {animes.map((anime) => (
      <Item key={anime.id} {...anime} />
    ))}
  </section>
);
