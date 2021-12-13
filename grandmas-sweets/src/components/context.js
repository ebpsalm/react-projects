import react from 'react';
import React from 'react';
import { useContext } from 'react';
const AppContext = react.createContext();
export function Context({ children }) {
  return (
    <AppContext.Provider value='hallo world'>{children}</AppContext.Provider>
  );
}

const useGlobalContext = () => {
  return useContext(AppContext);
};
export default useGlobalContext;
