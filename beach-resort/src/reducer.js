const reducer = (state, action) => {
  if (action.type === 'LOADING') {
    return { ...state, loading: true };
  }
  if (action.type === 'ROOMS') {
    return { ...state, rooms: action.payload.response, loading: false };
  }
  return state;
};
export default reducer;
