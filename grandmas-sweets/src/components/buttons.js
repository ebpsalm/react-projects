import React from 'react';
import useGlobalContext from './context';
const Buttons = () => {
  const { store } = useGlobalContext();
  const categories = ['all', ...new Set(store.map((item) => item.category))];
  return (
    <div className='filter-btns'>
      {categories.map((category, index) => {
        return (
          <button key={index} className='filter-btn btn'>
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Buttons;
