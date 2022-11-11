import React from 'react';
import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => (
  <div className='app__newsletter'>
    <div className="app__newsletter-heading">
      <SubHeading title='Newsletter' />
      <h1 className="headtext__cormorant">Subscribe To Our Newsletter</h1>
      <p className="p__opensans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus non harum dolorem sit dolore fuga dolores est in, atque esse ex odit eaque nostrum aliquid dignissimos a corrupti ipsa. Libero.</p>
    </div>
    <div className="app__newsletter-input flex__content">
      <input type="email" placeholder='Enter your email address' />
      <button className='custom__button'>Subscribe</button>
    </div>
  </div>
);

export default Newsletter;
