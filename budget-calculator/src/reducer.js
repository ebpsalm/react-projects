import { v4 as uuid } from 'uuid';
const reducer = (state, action) => {
  if (action.type === 'INPUT_CONTROL') {
    let newValue = action.payload.input;
    // let newState;
    if (newValue === 'item') {
      return { ...state, item: action.payload.value };
    }
    if (newValue === 'amount') {
      return { ...state, amount: action.payload.value };
    }
  }
  if (action.type === 'CLEAR_LIST') {
    const newState = {
      ...state,
      cart: [],
      isAlert: { state: true, type: 'danger', msg: 'list cleared' },
    };
    return newState;
  }
  if (action.type === 'REMOVE') {
    const newCart = state.cart.filter((item) => item.id !== action.payload);

    return {
      ...state,
      cart: newCart,
      isAlert: { state: true, type: 'danger', msg: 'item removed' },
    };
  }
  if (action.type === 'EDIT') {
    const item = state.cart.find((item) => item.id === action.payload);

    return {
      ...state,
      editFlag: true,
      editID: item.id,
      item: item.item,
      amount: item.amount,
    };
  }
  if (action.type === 'SUBMIT') {
    const { item, amount, editFlag, editID } = action.payload;

    if (!item || !amount) {
      return {
        ...state,
        isAlert: {
          state: true,
          type: 'danger',
          msg: 'please enter all values',
        },
      };
    }
    if (isNaN(amount)) {
      return {
        ...state,
        isAlert: {
          state: true,
          type: 'danger',
          msg: 'enter valid amount',
        },
      };
    }
    if (editFlag && item && amount && !isNaN(amount)) {
      const newCart = state.cart.map((thisItem) => {
        if (thisItem.id === editID) {
          return { ...thisItem, item, amount };
        }
        return thisItem;
      });

      return {
        ...state,
        cart: newCart,
        isAlert: { state: true, type: 'success', msg: 'item edited' },
      };
    }
    const newItem = { id: uuid(), item, amount };
    return {
      ...state,
      cart: [...state.cart, newItem],
      isAlert: { state: true, type: 'success', msg: 'item added' },
    };
  }
  if (action.type === 'TOTAL') {
    return { ...state, total: action.payload };
  }
  if (action.type === 'SET_BACK_TO_DEFAULT') {
    return { ...state, editID: '', editFlag: false, item: '', amount: '' };
  }
  if (action.type === 'ALERT') {
    return { ...state, isAlert: { state: false, type: '', msg: '' } };
  }

  throw new Error('there is no action type matching the dispatch');
};

export default reducer;
