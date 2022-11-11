import React from 'react';
import images from '../../constants/images';
import data from '../../constants/data';
import SubHeading from '../../components/SubHeading/SubHeading'
import MenuItem from '../../components/Menuitem/MenuItem'
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className='app__specialMenu flex-center section__padding' id='menu'>
    <div className="app__specialMenu-title">
      <SubHeading title='Menu that fits you palatte' />
      <h1 className='headtext__cormorant' > Today's Special</h1>
    </div>
    <div className="app__specialMenu-menu">
      <div className='app__specialMenu-menu_wine flex__center' >
        <p className='app__specialMen-menu_heading'>Wine & Beer</p>
        <div className="app__specialMenu_menu_items">
          {data.wines.map((wine,index) => (
            <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} />
          ))}
        </div>
      </div>
      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu img" />
      </div>
      <div className='app__specialMenu-menu_cocktails flex__center' >
        <p className='app__specialMen-menu_heading'>Cocktails</p>
        <div className="app__specialMenu_menu_items">
          {data.cocktails.map((cocktail,index) => (
            <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
          ))}
        </div>
      </div>
    </div>
    <div style={{marginTop : '15px',textAlign: 'center'}} >
      <button type='button' className='custom__button' >View More</button>
    </div>
  </div>
);

export default SpecialMenu;
