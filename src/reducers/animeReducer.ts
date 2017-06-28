const initialState = {
  data: [
    {
      id: 1,
      title: 'Boku No Hero Academia',
      linkCanonical: '',
      synopsis: '',
      type: '',
      episodes: 24,
      status: 'Airing',
      aired: '',
      producer: ['Sunrise'],
      studio: ['Sunrise'],
      genre: [['Shounen'], ['Seinen'], ['Action']],
      score: [8.9],
      ranked: 1,
      popularity: 2453,
      openingTheme: ['yeah'],
      endingTheme: ['wow'],
    },
  ],
  isFetching: false,
};

export default (state = initialState, action: string) => {
  return state;
};
