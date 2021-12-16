import react from 'react';
import React from 'react';
import { v4 as uuid } from 'uuid';
import reducer from './reducer';
import { useReducer, useEffect, useContext, useRef, useCallback } from 'react';
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
  total: 0,
  staticStore: [],
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
    dispatch({ type: 'STATIC', payload: response });
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
  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };
  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
    fetchData();
  };
  const calculate = useCallback(() => {
    let total = state.cart.reduce((acc, curr) => {
      acc += curr.price;
      return acc;
    }, 0);
    total = parseFloat(total.toFixed(2));
    dispatch({ type: 'CALCULATE', payload: total });
  }, [state.cart]);
  const filterStore = (e) => {
    const category = e.target.dataset.name;
    if (category === 'all') {
      dispatch({ type: 'STORE', payload: state.staticStore });
      return;
    } else {
      const newStore = state.staticStore.filter(
        (item) => item.category === category
      );

      dispatch({ type: 'STORE', payload: newStore });
    }
  };
  const handleSearch = (e) => {
    const input = e.target.value;
    dispatch({ type: 'QUERY', payload: input });
    const newStore = state.staticStore.filter((item) =>
      item.name.includes(state.search)
    );

    dispatch({ type: 'STORE', payload: newStore });
  };
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    const clearAlert = setTimeout(() => {
      dispatch({ type: 'CLEAR_ALERT' });
    }, 2000);
    calculate();

    return () => {
      clearTimeout(clearAlert);
    };
  }, [state.alert, calculate]);
  return (
    <AppContext.Provider
      value={{
        ...state,
        displayCart,
        links,
        handleLinks,
        navBar,
        handleAddToStoreBtns,
        removeItem,
        clearCart,
        filterStore,
        handleSearch,
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
