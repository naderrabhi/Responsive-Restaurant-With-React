import React from 'react';
import SubHeading from '../../components/SubHeading/SubHeading'
import images from '../../constants/images';
import image from '../../constants/images'
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>

    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={image.chef} alt="img chef" />
    </div>

    <div className="app__wrapper_info">

      <SubHeading title="Chef's Word " />
      <h1 className="headtext__cormorant">What We Believe In</h1>
      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={image.quote} alt="chef quote" />
          <p className="p__opensans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum commodi nulla ipsa amet ducimus nesciunt deleniti fuga. Quisquam sint est quam accusamus impedit accusantium tempore sequi? Corrupti esse exercitationem voluptatibus?</p>
        </div>
        <p className="p__opensans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto modi maiores incidunt, aut, distinctio vitae at nam ipsum minima laborum neque nostrum cumque magnam laboriosam quibusdam illum assumenda, magni tenetur!</p>
      </div>
      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign" />
      </div>

    </div>

  </div>
);

export default Chef;
