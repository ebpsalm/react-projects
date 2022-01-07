import React from 'react';
import Banner from '../components/banner';
import useGlobalContext from '../context';
import Title from '../components/Title';
import Filter from '../components/filter';
import { Link } from 'react-router-dom';
import Bcg from '../images/defaultBcg.jpeg';
const Rooms = () => {
  const { filteredRooms, reset } = useGlobalContext();

  return (
    <>
      <Banner
        utils={{
          path: '/',
          text: 'back home',
          title: 'our rooms',
          img: Bcg,
        }}
      ></Banner>
      <div className='rooms'>
        <Title title='search rooms' />
        <Filter />
        <div className='reset'>
          <button type='reset' className='btn reset-btn' onClick={reset}>
            reset
          </button>
        </div>
        <section className='grid-container'>
          {filteredRooms.length < 1 ? (
            <h3>sorry no rooms match your search parameters</h3>
          ) : (
            filteredRooms.map((room) => {
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
            })
          )}
        </section>
      </div>
    </>
  );
};

export default Rooms;
