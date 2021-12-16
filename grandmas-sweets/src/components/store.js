import React from 'react';
import { FaSearch } from 'react-icons/fa';
import Buttons from './buttons';
import Sweet from './sweet';
import useGlobalContext from './context';

const Store = () => {
  const { store, search, handleSearch } = useGlobalContext();
  return (
    <section className='store' id='store'>
      <h1>
        our <span className='special'>store</span>
      </h1>
      <Buttons />
      <form className='form'>
        <FaSearch className='search-icon' />
        <input
          type='text'
          placeholder='Searh Item'
          value={search}
          onChange={handleSearch}
        />
      </form>
      {store.length > 0 ? (
        <div className='store-container'>
          {store.map((item, index) => {
            return <Sweet key={item.id} {...item} />;
          })}
        </div>
      ) : (
        <div className='store-container'>
          <p>sorry, no items matched your search</p>
        </div>
      )}
    </section>
  );
};

export default Store;
