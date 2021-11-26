import React from 'react';
import { useContext, useEffect, useReducer } from 'react';
import reducer from './reducer';
const AppContext = React.createContext();
const getLocalStorage = () => {
  const data = localStorage.getItem('list');
  if (data) {
    return JSON.parse(localStorage.getItem('list'));
  } else {
    return [];
  }
};

const dafaultState = {
  cart: getLocalStorage(),
  total: 0,
  editID: null,
  editFlag: false,
  isAlert: { state: false, type: 'success', msg: 'hallo world' },
  item: '',
  amount: '',
};
const Another = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, dafaultState);
  const controlledInputs = (e) => {
    dispatch({
      type: 'INPUT_CONTROL',
      payload: { value: e.target.value, input: e.target.name },
    });
  };
  const clearList = () => {
    dispatch({ type: 'CLEAR_LIST' });
  };
  const removeItem = (id) => {
    dispatch({ type: 'REMOVE', payload: id });
  };
  const editItem = (id) => {
    dispatch({ type: 'EDIT', payload: id });
  };
  const submit = (e) => {
    e.preventDefault();

    const { item, amount, editFlag, editID } = state;
    dispatch({
      type: 'SUBMIT',
      payload: { item, amount, editFlag, editID },
    });
    dispatch({ type: 'SET_BACK_TO_DEFAULT' });
  };

  useEffect(() => {
    const timeOut = setTimeout(() => {
      dispatch({ type: 'ALERT' });
    }, 2000);
    return () => {
      clearTimeout(timeOut);
    };
  }, [state.isAlert]);
  useEffect(() => {
    const total = state.cart.reduce((acc, curr) => {
      acc += parseInt(curr.amount);
      return acc;
    }, 0);

    localStorage.setItem('list', JSON.stringify(state.cart));
    dispatch({ type: 'TOTAL', payload: total });
  }, [state.cart]);
  return (
    <AppContext.Provider
      value={{
        ...state,
        controlledInputs,
        clearList,
        removeItem,
        editItem,
        submit,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export default Another;
