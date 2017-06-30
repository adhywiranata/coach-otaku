import * as React from 'react';
import { Link } from 'react-router-dom';

import { Anime } from '../../types';

export default ({
  id,
  title,
  linkCanonical,
  imageUrl,
  synopsis,
  type,
  episodes,
  status,
  aired,
  producer,
  studio,
  genre,
  score,
  ranked,
  popularity,
  openingTheme,
  endingTheme
}: Anime) => (
  <div className="anime-card">
    <div className="badge">TRENDING</div>
    <div style={{ flex: 1 }}>
      <img src={imageUrl} width="100%" />
    </div>
    <div style={{ flex: 1, paddingBottom: 10 }}>
      <Link to={`/anime/${id}`} className="link"><h2>{title}</h2></Link>
      <span className="score">{score[0]}</span>
      <div>
        <div className="tag">Shounen</div>
        <div className="tag">Action</div>
        <div className="tag">Seinen</div>
      </div>
    </div>
  </div>
);
