import React from 'react';
import useGlobalContext from '../context';
import loader from '../images/gif/loading-arrow.gif';

const Filter = () => {
  const {
    minMax,
    rooms,
    type,
    guests,
    price,
    size,
    breakfast,
    pets,
    handleFilter,
    loading,
  } = useGlobalContext();
  if (loading) {
    return (
      <div className='loading'>
        <img src={loader} alt='loader' />
      </div>
    );
  }
  const types = ['all', ...new Set(rooms.map((room) => room.type))];
  return (
    <section className='fliter'>
      <form className='filter' onSubmit={(e) => e.preventDefault()}>
        <div>
          <label htmlFor='type'>room type</label>
          <select
            type='text'
            id='type'
            name='type'
            value={type}
            onChange={(e) => handleFilter(e.target.name, e)}
          >
            {types.map((type, index) => {
              return <option key={index}>{type}</option>;
            })}
          </select>
        </div>
        <div>
          <label htmlFor='guests'>guests</label>
          <input
            type='number'
            id='guests'
            placeholder='1'
            name='guests'
            value={guests}
            min={minMax.roomCapacity.min}
            max={minMax.roomCapacity.max}
            onChange={(e) => handleFilter(e.target.name, e)}
          />
        </div>
        <div>
          <label htmlFor='price'>{`room price $${price}`}</label>
          <input
            type='range'
            id='price'
            min={minMax.roomPrice.min}
            max={minMax.roomPrice.max}
            name='price'
            value={price}
            onChange={(e) => handleFilter(e.target.name, e)}
          />
        </div>
        <div>
          <label htmlFor='size'>room size</label>
          <input
            type='number'
            id='size'
            name='size'
            value={size}
            min={minMax.roomSize.min}
            max={minMax.roomSize.max}
            onChange={(e) => handleFilter(e.target.name, e)}
          />
        </div>
        <div className='boolean'>
          <span>
            <input
              type='checkbox'
              id='breakfast'
              name='breakfast'
              value={breakfast}
              checked={breakfast}
              onChange={(e) => handleFilter(e.target.name, e)}
            />
            <label htmlFor='breakfast'>breakfast</label>
          </span>
          <span>
            <input
              type='checkbox'
              id='pets'
              name='pets'
              value={pets}
              checked={pets}
              onChange={(e) => handleFilter(e.target.name, e)}
            />
            <label htmlFor='pets'>pets</label>
          </span>
        </div>
      </form>
    </section>
  );
};

export default Filter;
