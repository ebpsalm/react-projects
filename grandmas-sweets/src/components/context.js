import react from 'react';
import React from 'react';
import { v4 as uuid } from 'uuid';
import reducer from './reducer';
import { useReducer, useEffect, useContext, useRef } from 'react';
import links from '../supports/links';

const AppContext = react.createContext();
const contentful = require('contentful');
const client = contentful.createClient({
  space: '4mtgiknsg42p',
  accessToken: 'fRv5pbhzfLcPayBARljEOM32jycjBHe3yTlbtRvKN7I',
});
const defaultState = {
  store: [],
  alert: { msg: '', state: false, type: '' },
  cart: [],
  search: '',
  isCartOpen: false,
};
export function Context({ children }) {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const navBar = useRef();
  const fetchData = async () => {
    const { items } = await client.getEntries({
      content_type: 'grandmas',
    });
    const response = [
      ...items.map((item) => {
        const {
          fields: {
            category,
            name,
            price,
            image: {
              fields: {
                file: { url },
              },
            },
          },
        } = item;
        return { category, name, price, url, id: uuid(), isInCart: false };
      }),
    ];
    dispatch({ type: 'STORE', payload: response });
  };

  const displayCart = () => {
    dispatch({ type: 'SHOW_CART' });
  };
  const handleLinks = (e) => {
    e.preventDefault();
    const id = e.currentTarget.dataset.id;
    const navHeight = navBar.current.getBoundingClientRect().height;
    const target = document.querySelector(`${id}`);
    const targetTop = target.offsetTop;
    const reqHeight = targetTop - navHeight;

    window.scrollTo({
      top: `${reqHeight}`,
      left: 0,
      behavior: 'smooth',
    });
  };
  const handleAddToStoreBtns = (e) => {
    const id = e.currentTarget.dataset.id;
    const newStore = state.store.map((item) => {
      if (item.id === id) {
        return { ...item, isInCart: true };
      }
      return item;
    });
    dispatch({ type: 'STORE', payload: newStore });
    const newItem = state.store.find((item) => item.id === id);
    if (!newItem.isInCart) {
      const newCart = [...state.cart, newItem];
      dispatch({ type: 'ADD_ITEM', payload: newCart });
    }
    if (newItem.isInCart) {
      dispatch({ type: 'ITEM_IN_CART' });
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    const clearAlert = setTimeout(() => {
      dispatch({ type: 'CLEAR_ALERT' });
    }, 2000);
    return () => {
      clearTimeout(clearAlert);
    };
  }, [handleAddToStoreBtns]);
  return (
    <AppContext.Provider
      value={{
        ...state,
        displayCart,
        links,
        handleLinks,
        navBar,
        handleAddToStoreBtns,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

const useGlobalContext = () => {
  return useContext(AppContext);
};
export default useGlobalContext;
