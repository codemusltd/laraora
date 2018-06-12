import React from 'react';
import ReactDOM from 'react-dom';

export const Info = (props) =>{
    return(
      <div id='three' className='w3-display-container w3-center'>
          <p className='w3-text-black w3-padding'>Salon, Spa & Boutique</p>
          <hr className='w3-padding'/>
          <p className='w3-text-black w3-padding w3-center'>YOUR ONE STOP SHOP</p>
          <p className='w3-text-black w3-padding w3-center'>FOR ALL THINGS BEAUTY</p>
          <p className='w3-text-black w3-padding'>BEAUTY BOUTIQUE SALON, SPA AND APPAREL PROVIDES ALL YOUR SKIN AND BEAUTY NEEDS.<br/>  
              WE HAVE A FABULOUS COLLECTION OF THE LATEST, HOTTEST STYLES IN FASHION, COSMETICS AND ACCESSORIES.</p>
      </div> 
    )
  }
  
  ReactDOM.render(<Info/>, document.getElementById('info'));