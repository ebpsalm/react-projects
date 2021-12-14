import react from 'react';
import React from 'react';
import reducer from './reducer';
import { useReducer, useEffect } from 'react';
import { useContext } from 'react';
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
        return { category, name, price, url };
      }),
    ];
    dispatch({ type: 'STORE', payload: response });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
}

const useGlobalContext = () => {
  return useContext(AppContext);
};
export default useGlobalContext;
