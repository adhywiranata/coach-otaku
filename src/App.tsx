import * as React from 'react';

import './App.css';
import Header from './components/Header';

class App extends React.Component<{}, {}> {
  render() {
    return (
      <div className="app">
        <Header />
        <section className="app-wrapper">
          <h1>Animes for You</h1>
          <section className="anime-list">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((anime, index) => (
              <div className="anime-card">
                <div className="badge">TRENDING</div>
                <div style={{ flex: 1 }}>
                  <img src="https://myanimelist.cdn-dena.com//images//anime//12//85221.jpg" width="100%" />
                </div>
                <div style={{ flex: 1, paddingBottom: 10 }}>
                  <h2>Boku no Hero Academia Season 2</h2>
                  <span className="score">9.05</span>
                  <div>
                    <div className="tag">Shounen</div>
                    <div className="tag">Action</div>
                    <div className="tag">Seinen</div>
                    { index % 2 === 0 && <div className="tag">Drama</div> }
                    { index % 2 === 0 && <div className="tag">Superhero</div> }
                  </div>
                </div>
              </div>
            ))}
          </section>
        </section>
      </div>
    );
  }
}

export default App;
