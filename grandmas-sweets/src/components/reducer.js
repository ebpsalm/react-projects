const reducer = (state, action) => {
  console.log(state);
  if (action.type === 'STORE') {
    return { ...state, store: action.payload };
  }
  if (action.type === 'SHOW_CART') {
    if (!state.isCartOpen) {
      return { ...state, isCartOpen: true };
    } else {
      return { ...state, isCartOpen: false };
    }
  }
  if (action.type === 'ITEM_IN_CART') {
    return {
      ...state,
      alert: { msg: 'already in cart', type: 'danger', state: true },
    };
  }
  if (action.type === 'ADD_ITEM') {
    return {
      ...state,
      cart: action.payload,
      alert: { msg: 'added to cart', type: 'success', state: true },
      isCartOpen: true,
    };
  }
  if (action.type === 'CLEAR_ALERT') {
    return { ...state, alert: { msg: '', state: false, type: '' } };
  }
  return state;
};
export default reducer;
