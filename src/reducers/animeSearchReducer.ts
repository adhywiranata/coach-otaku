const initialState = '';

export default (state = initialState, action: any) => {
  switch (action.type) {
    case 'SET_SEARCH_KEYWORD': return action.payload;
    default: return state;
  }
};
