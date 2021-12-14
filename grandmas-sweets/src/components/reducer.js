const reducer = (state, action) => {
  if (action.type === 'STORE') {
    return { ...state, store: action.payload };
  }
  return state;
};
export default reducer;
