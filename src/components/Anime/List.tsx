import * as React from 'react';

import { Animes } from '../../types';

interface PropTypes {
  animes: Animes;
}

export default ({ animes }: PropTypes) => (
  <section className="anime-list">
    {animes.map((anime) => (
      <div key={anime.id} className="anime-card">
        <div className="badge">TRENDING</div>
        <div style={{ flex: 1 }}>
          <img src="https://myanimelist.cdn-dena.com//images//anime//12//85221.jpg" width="100%" />
        </div>
        <div style={{ flex: 1, paddingBottom: 10 }}>
          <h2>{anime.title}</h2>
          <span className="score">{anime.score[0]}</span>
          <div>
            <div className="tag">Shounen</div>
            <div className="tag">Action</div>
            <div className="tag">Seinen</div>
          </div>
        </div>
      </div>
    ))}
  </section>
);
