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
  loading: true,
  minMax: '',
  type: 'all',
  guests: 1,
  price: '',
  size: '',
  breakfast: false,
  pets: false,
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
    const minMax = {
      roomPrice: {
        min: Math.min(...response.map((room) => room.price)),
        max: Math.max(...response.map((room) => room.price)),
      },
      roomSize: {
        min: Math.min(...response.map((room) => room.size)),
        max: Math.max(...response.map((room) => room.size)),
      },
      roomCapacity: {
        min: Math.min(...response.map((room) => room.capacity)),
        max: Math.max(...response.map((room) => room.capacity)),
      },
    };
    dispatch({ type: 'ROOMS', payload: { response, minMax } });
  };
  const reset = () => {
    window.location.reload();
  };
  const handleFilter = (name, e) => {
    let propValue = e.target.value;
    let newFilteredRooms;
    if (name === 'guests' || name === 'price' || name === 'size') {
      propValue = parseInt(e.target.value);
      if (name === 'guests') {
        newFilteredRooms = state.filteredRooms.filter(
          (room) => room.capacity === propValue
        );
      }
      if (name === 'price') {
        newFilteredRooms = state.filteredRooms.filter(
          (room) => room.price <= propValue
        );
      }
      if (
        name === 'size' &&
        propValue < state.minMax.roomSize.max &&
        propValue > state.minMax.roomSize.min
      ) {
        newFilteredRooms = state.filteredRooms.filter(
          (room) => room.size <= propValue
        );
      } else {
        newFilteredRooms = state.rooms;
      }
    }
    if (name === 'breakfast' || name === 'pets') {
      if (propValue === 'true') {
        propValue = true;
      } else {
        propValue = false;
      }
      propValue = !propValue;
      if (name === 'breakfast') {
        newFilteredRooms = state.filteredRooms.filter((room) => {
          return room.breakfast === propValue;
        });
      }
      if (name === 'pets') {
        newFilteredRooms = state.filteredRooms.filter((room) => {
          return room.pets === propValue;
        });
      }
    }
    if (name === 'type') {
      newFilteredRooms = state.filteredRooms.filter(
        (room) => room.type === propValue
      );
      if (propValue === 'all') {
        newFilteredRooms = state.rooms;
      }
    }
    dispatch({
      type: 'FILTER',
      payload: { propValue, name, newFilteredRooms },
    });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AppContext.Provider value={{ ...state, handleFilter, reset }}>
      {children}
    </AppContext.Provider>
  );
};
const useGlobalContext = () => useContext(AppContext);

export default useGlobalContext;
