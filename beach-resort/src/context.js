import React from 'react';
import { useContext, useEffect, useReducer } from 'react/cjs/react.development';
import reducer from './reducer';
const contentful = require('contentful');
const client = contentful.createClient({
  accessToken: 'fRv5pbhzfLcPayBARljEOM32jycjBHe3yTlbtRvKN7I',
  space: '4mtgiknsg42p',
});
const defaultState = {
  rooms: [],
  filteredRooms: [],
  loading: false,
};
const AppContext = React.createContext();
export const Context = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const fetchData = async () => {
    dispatch({ type: 'LOADING' });
    const { items } = await client.getEntries({
      content_type: 'beachResort',
    });
    const response = items.map((item) => {
      const {
        sys: { id },
        fields: {
          breakfast,
          capacity,
          description,
          extras,
          featured,
          images,
          name,
          pets,
          price,
          size,
          slug,
          type,
        },
      } = item;
      return {
        id,
        breakfast,
        capacity,
        description,
        extras,
        featured,
        img: [
          ...images.map((image) => {
            const {
              fields: {
                file: { url },
              },
            } = image;
            return url;
          }),
        ],
        name,
        pets,
        price,
        size,
        slug,
        type,
      };
    });
    dispatch({ type: 'ROOMS', payload: { response } });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};
const useGlobalContext = () => useContext(AppContext);

export default useGlobalContext;
