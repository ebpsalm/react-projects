import React from 'react';
import details from '../supports/services';
const Details = () => {
  return (
    <section className='details' id='services'>
      {details.map((detail, index) => {
        const { title, image, description } = detail;
        return (
          <article key={index} className='detail'>
            <div className='detail-img'>
              <img src={image} alt={title} />
            </div>
            <h2>{title}</h2>
            <p>{description}</p>
          </article>
        );
      })}
    </section>
  );
};

export default Details;
