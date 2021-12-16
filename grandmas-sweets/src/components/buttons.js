import React from 'react';
import useGlobalContext from './context';
const Buttons = () => {
  const { staticStore, filterStore } = useGlobalContext();

  const categories = [
    'all',
    ...new Set(staticStore.map((item) => item.category)),
  ];
  return (
    <div className='filter-btns'>
      {categories.map((category, index) => {
        return (
          <button
            key={index}
            data-name={category}
            className='filter-btn btn'
            onClick={filterStore}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Buttons;
