const reducer = (state, action) => {
  if (action.type === 'LOADING') {
    return { ...state, loading: true };
  }
  if (action.type === 'ROOMS') {
    return {
      ...state,
      rooms: action.payload.response,
      loading: false,
      filteredRooms: action.payload.response,
      minMax: action.payload.minMax,
      price: action.payload.minMax.roomPrice.max,
      size: action.payload.minMax.roomSize.max,
      guests: action.payload.minMax.roomCapacity.min,
    };
  }
  if (action.type === 'FILTER') {
    const dispatchName = action.payload.name;
    return {
      ...state,
      [dispatchName]: action.payload.propValue,
      filteredRooms: action.payload.newFilteredRooms,
    };
  }
  return state;
};
export default reducer;
