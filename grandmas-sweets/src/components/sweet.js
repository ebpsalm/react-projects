import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import useGlobalContext from './context';
const Sweet = ({ name, price, url, id }) => {
  const {handleAddToStoreBtns} = useGlobalContext()
  return (
    <article className='sweet'>
      <div className='store-img'>
        <img src={url} alt={name} />
        <button className='cart-icon btn' data-id={id} onClick={handleAddToStoreBtns}>
          <FaShoppingCart />
        </button>
      </div>
      <div className='store-footer'>
        <h3>{name}</h3>
        <p>
          $<span>{price}</span>
        </p>
      </div>
    </article>
  );
};

export default Sweet;
