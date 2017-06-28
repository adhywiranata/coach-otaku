import * as React from 'react';

import AnimeList from '../components/Anime/List';

interface Anime {
  id: number;
  title: string;
  linkCanonical: string;
  synopsis: string;
  type: string;
  episodes: number;
  status: string;
  aired: string;
  producer: [string];
  studio: [string];
  genre: [[string]];
  score: [number];
  ranked: number;
  popularity: number;
  openingTheme: [string];
  endingTheme: [string];
}

interface StateType {
  animes: [Anime];
}

class HomePage extends React.Component {
  state: StateType;
  constructor() {
    super();
    this.state = {
      animes: [
        {
          id: 1,
          title: "Boku No Hero Academia",
          linkCanonical: "",
          synopsis: "",
          type: "",
          episodes: 24,
          status: "Airing",
          aired: "",
          producer: ["Sunrise"],
          studio: ["Sunrise"],
          genre: [["Shounen"], ["Seinen"], ["Action"]],
          score: [8.9],
          ranked: 1,
          popularity: 2453,
          openingTheme: ["yeah"],
          endingTheme: ["wow"],
        },
      ],
    };
  }
  render() {
    return (
      <section className="app-wrapper">
        <h1>Animes for You</h1>
        <AnimeList animes={this.state.animes} />
      </section>
    );
  }
}

export default HomePage;
