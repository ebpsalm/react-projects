import React from 'react';
import image from '../img/sweets-1.jpeg';
const About = () => {
  return (
    <section className='about' id='about'>
      <div className='header-center'>
        <h1>
          about <span className='special'>us</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          laudantium pariatur quod illum earum aliquam illo fugit consequuntur
          dicta est? Aut aspernatur voluptatum repudiandae voluptate, dolor
          doloribus distinctio illo enim recusandae, asperiores fugiat saepe
          minus. Voluptatum officia sequi doloremque, sapiente optio illum ut
          natus labore rem consectetur placeat possimus dolore aliquam
          exercitationem quaerat? Voluptas recusandae, sint inventore possimus
          doloremque iure! Sapiente, ea! Assumenda laudantium id excepturi
          cumque doloremque voluptatum doloribus explicabo harum autem et,
          aspernatur temporibus iusto in ea animi dolorum esse, voluptatibus
          necessitatibus dolorem molestias saepe maxime pariatur reprehenderit.
          Asperiores explicabo commodi dicta hic placeat eligendi accusamus
          nulla quidem.
        </p>
        <a href='#store' className='explore'>
          explore
        </a>
      </div>
      <div className='about-img'>
        <img src={image} alt='candy' />
      </div>
    </section>
  );
};

export default About;
