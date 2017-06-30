const initialState = '';

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SEARCH_KEY': return action.payload;
    default: return state;
  }
};
