import React from 'react';
import orders from '../supports/orders';
function Orders() {
  return (
    <section className='orders-section' id='order'>
      <h2>
        order <span className='special'>cake</span>
      </h2>
      <div>
        {orders.map((order, index) => {
          const { title, image } = order;
          return (
            <article key={index} className='single-order'>
              <h4>{title}</h4>
              <div>
                <p>birthday cake with a name</p>
                <p>custom ingredients</p>
                <p>custom size</p>
                <p>custom design</p>
              </div>
              <button className='btn order-btn'>order now</button>
              <p>starting at $5</p>
              <div className='order-img'>
                <img src={image} alt={title} />
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Orders;
