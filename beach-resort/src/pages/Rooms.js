import React from 'react';
import Banner from '../components/banner';
import useGlobalContext from '../context';
import Title from '../components/Title';
import Filter from '../components/filter';
import { Link } from 'react-router-dom';

const Rooms = () => {
  const { rooms } = useGlobalContext();
  const images = [
    ...rooms.map((room) => {
      return room.img;
    }),
  ];
  const getRandom = () => {
    return Math.floor(Math.random() * images.length);
  };
  const main = images[getRandom()] && images[getRandom()][0];
  return (
    <>
      <Banner
        utils={{
          path: '/',
          text: 'back home',
          title: 'our rooms',
          img: main || null,
        }}
      ></Banner>
      <div className='rooms'>
        <Title title='search rooms' />
        <Filter />
        <section className='grid-container'>
          {rooms.map((room) => {
            const { id, img, name, price, slug } = room;
            return (
              <Link key={id} to={`/rooms/${slug}`} className='grid-link'>
                <article className='room'>
                  <div className='room-img'>
                    <div>
                      <h6>{`$ ${price}`}</h6>
                      <p>per night</p>
                    </div>
                    <span className='room-banner'>
                      <h4>read more</h4>
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
      </div>
    </>
  );
};

export default Rooms;
