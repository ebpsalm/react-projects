import React from 'react';
import useGlobalContext from './context';
import { FaTrash } from 'react-icons/fa';

const Cart = () => {
  const { cart, isCartOpen } = useGlobalContext();
  return (
    <section className={`cart ${isCartOpen && 'show-cart'}`}>
      <div className='cart-items'>
        {cart.map((item, index) => {
          return (
            <article key={index}>
              <div className='cart-img'>
                <img src={item.url} alt={item.name} />
              </div>
              <div className='description'>
                <h4>{item.name}</h4>
                <p>{item.price}</p>
              </div>
              <FaTrash className='btn' />
            </article>
          );
        })}
      </div>
      <p>
        total <span className='cart-total'>$0</span>
      </p>
      {cart.length > 0 ? (
        <div className='cart-btns'>
          <button className='btn'>clear cart</button>
          <button className='btn'>checkout</button>
        </div>
      ) : (
        <p>cart is empty</p>
      )}
    </section>
  );
};

export default Cart;
