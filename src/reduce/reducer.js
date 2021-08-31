const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, loading: true };
    case "GET_STORIES":
      return {
        ...state,
        loading: false,
        hits: action.payload.hits,
        nbPage: action.payload.nbPage,
      };
    case "REMOVE_ITEM":
      let newHits = state.hits.filter((item) => item.objectID !== action.id);
      return { ...state, hits: newHits };
    case "SEARCH_VALUE":
      return { ...state, query: action.payload, page: 0 };
    case "HANDLE_PREV":
      let newPrev = state.page - 1;
      if (newPrev < 0) {
        newPrev = state.nbPage-1;
      }
     
      return { ...state, page: newPrev };
    case "HANDLE_NEXT":
      let newNext = state.page + 1;
      if (newNext >= state.nbPage) {
        newNext = 0;
      }
     
      return { ...state, page: newNext };
    default:
      throw new Error(`this error is from ${action.type}`);
  }
};
export default reducer;
