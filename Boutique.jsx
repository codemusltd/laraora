import React from 'react';
import ReactDOM from 'react-dom';

export const Boutique = (props) =>{
    return(
      <div id='two' className='w3-display-container'>
      <div className='w3-display-container w3-text-white'>
          <img src='https://static1.squarespace.com/static/53431644e4b0cf4885e907f7/t/593068b56a496379d8588858/1496344926799/unnamed-1.jpg' 
              alt='beauty' style={{width:'100%', height:'850px'}}/>
          <div className='w3-xxxlarge w3-display-middle w3-padding w3-text-black'><span id='beauty' className='w3-caps w3-text-black w3-light'>beauty boutique</span>
              <div className='w3-row w3-text-white'>
                  <div className='w3-third w3-center'>
                      <h3 className='w3-black w3-s-cap w3-button w3-round-xxlarge w3-padding-large'>Salon</h3>
                  </div>
                  <div className='w3-third w3-center'>
                      <h3 className='w3-black w3-s-cap w3-button w3-round-xxlarge w3-padding-large'>Spa</h3>
                  </div>
                  <div className='w3-third w3-center w3-margin-bottom'>
                      <h3 className='w3-black w3-s-cap w3-button w3-round-xxlarge w3-padding-large'>Apparel</h3>
                  </div>
              </div>
          </div>
      </div>
  </div>
    )
  }
  
ReactDOM.render(<Boutique/>, document.getElementById('boutique'));