import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';
import { useGlobalContext } from './context';

const List = () => {
  const { cart, clearList, removeItem, editItem } = useGlobalContext();
  return (
    <section className='list-section'>
      {cart.map((item) => {
        return (
          <article key={item.id} className='item'>
            <h4>{item.item}</h4>
            <span>${item.amount}</span>
            <div className='icon-container'>
              <button type='button' onClick={() => editItem(item.id)}>
                <FaEdit className='edit' />
              </button>
              <button type='button' onClick={() => removeItem(item.id)}>
                <FaTrash className='delete' />
              </button>
            </div>
          </article>
        );
      })}
      {cart.length > 0 && (
        <button type='button' className='btn clear-btn' onClick={clearList}>
          clear list
        </button>
      )}
    </section>
  );
};

export default List;
