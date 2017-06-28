export interface Anime {
  readonly id: number;
  readonly title: string;
  readonly linkCanonical: string;
  readonly synopsis: string;
  readonly type: string;
  readonly episodes: number;
  readonly status: string;
  readonly aired: string;
  readonly producer: [string];
  readonly studio: [string];
  readonly genre: [[string]];
  readonly score: [number];
  readonly ranked: number;
  readonly popularity: number;
  readonly openingTheme: [string];
  readonly endingTheme: [string];
}
