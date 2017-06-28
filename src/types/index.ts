export interface Anime {
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
