const reducer = (state, action) => {
  if (action.type === 'STORE') {
    return { ...state, store: action.payload };
  }
  if (action.type === 'STATIC') {
    return { ...state, staticStore: action.payload };
  }
if(action.type === 'CART'){
  return {...state,cart: action.payload.cart}
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
  if (action.type === 'CLEAR_CART') {
    return {
      ...state,
      cart: [],
      alert: { msg: 'cart cleared', state: true, type: 'danger' },
      isCartOpen: false,
    };
  }
  if (action.type === 'REMOVE_ITEM') {
    const newCart = state.cart.filter((item) => item.id !== action.payload);
    const newStore = state.store.map((item) => {
      if (item.id === action.payload) {
        return { ...item, isInCart: false };
      }
      return item;
    });
    if (newCart.length < 1) {
      return {
        ...state,
        store: newStore,
        cart: newCart,
        alert: { msg: 'item removed', state: true, type: 'danger' },
        isCartOpen: false,
      };
    }
    return {
      ...state,
      store: newStore,
      cart: newCart,
      alert: { msg: 'item removed', state: true, type: 'danger' },
    };
  }
  if (action.type === 'CALCULATE') {
    return { ...state, total: action.payload };
  }
  if (action.type === 'QUERY') {
    return { ...state, search: action.payload };
  }
  return state;
};
export default reducer;
