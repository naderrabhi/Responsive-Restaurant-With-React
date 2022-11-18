import React from 'react';
import images from '../../constants/images';
import {awards} from '../../constants/data';
import SubHeading from '../../components/SubHeading/SubHeading'
import './Laurels.css';


const Laurels = () => (
  <div className='app__bg app__wrapper section__padding' id='awards'>
    <div className="app__wrapper_info">
      <SubHeading title="Awards & recognition" />
      <h1 className="headtext__cormorant">Our Laurels</h1>
      <div className="app__laurels_awards">
        {awards.map(award => (
          <div className="app__laurels_award-card">
          <img src={award.imgUrl} alt={award.title} />
          <div className="app__laurels_awards-card_content">
            <p className="p__cormorant" style={{color : '#DCCA87'}}>{award.title}</p>
            <p className="p__cormorant">{award.subtitle}</p>
          </div>
        </div>
        ))}
      </div>
    </div>
    <div className="app__wrapper_img">
          <img src={images.laurels} alt="laurels" />
    </div>
  </div>
);

export default Laurels;
