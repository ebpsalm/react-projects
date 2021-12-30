import React from 'react';
import Banner from '../components/banner';
import Title from '../components/Title.js';
import services from '../utilities/services.js';
import useGlobalContext from '../context';
import { Link } from 'react-router-dom';
const Home = () => {
  const { rooms } = useGlobalContext();
  const featured = rooms.filter((room) => room.featured);
  return (
    <>
      <Banner
        utils={{ path: '/rooms', text: 'our rooms', title: 'luxurious rooms' }}
      >
        deluxe rooms starting at $299
      </Banner>
      <div className='service'>
        <Title title='services' />
        <section className='grid-container'>
          {services.map((service, index) => {
            return (
              <article key={index} className='services'>
                <div>{service.icon}</div>
                <h4>{service.text}</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam nostrum a voluptates nemo! Similique eos nesciunt
                  dicta vel dolorem excepturi ipsa, quae odio, pariatur vitae
                  architecto quod et tempore ducimus ipsum nemo, recusandae sunt
                  dolor. Quis nostrum cum eligendi ullam expedita dicta
                  distinctio eius doloribus totam, consequuntur ipsa aliquam?
                </p>
              </article>
            );
          })}
        </section>
      </div>
      <article className='featured'>
        <Title title='featured rooms' />
        <section className='grid-container'>
          {featured.map((room) => {
            const { id, img, name, price } = room;
            return (
              <Link key={id} to='/rooms' className='grid-link'>
                <article className='room'>
                  <div className='room-img'>
                    <div>
                      <h6>{`$ ${price}`}</h6>
                      <p>per night</p>
                    </div>
                    <span className='room-banner'>
                      <h4>featured</h4>
                    </span>
                    <img src={img[0]} alt={name} className='img' />
                  </div>
                  <div className='room-footer'>
                    <h5>{name}</h5>
                  </div>
                </article>
              </Link>
            );
          })}
        </section>
      </article>
    </>
  );
};

export default Home;
