import React from 'react';
import Banner from '../components/banner';
import useGlobalContext from '../context';
import { useParams } from 'react-router-dom';
const SingleRoom = () => {
  const { rooms } = useGlobalContext();
  const { slug } = useParams();

  const singleRoom = rooms.find((room) => room.slug === slug);

  const {
    breakfast,
    capacity,
    description,
    extras,
    img,
    name,
    pets,
    price,
    size,
    type,
  } = singleRoom;
  return (
    <>
      <Banner
        utils={{
          path: '/rooms',
          text: 'our rooms',
          title: `${name} room`,
          img: img[0],
        }}
      >
        deluxe rooms starting at $299
      </Banner>
      <section className='single-room grid-container'>
        {img.map((image, index) => {
          if (index !== 0) {
            return (
              <div key={index}>
                <img src={image} alt={name} className='img' />;
              </div>
            );
          }
        })}
      </section>
      <article className='details grid-container'>
        <div>
          <h3>details</h3>
          <p>{description}</p>
        </div>
        <div className='particulars'>
          <h3>info</h3>
          <p>price : $ {price}</p>
          <p>size : {size}</p>
          <p>max capacity : {capacity}</p>
          <p>pets : {pets ? 'allowed' : 'not allowed'}</p>
          {breakfast && <p>breakfast included</p>}
        </div>
      </article>
      <article className='extras'>
        <h4>extras</h4>
        <div className='grid-container'>
          {extras.map((extra, index) => {
            return <p key={index}>- {extra}</p>;
          })}
        </div>
      </article>
    </>
  );
};

export default SingleRoom;
