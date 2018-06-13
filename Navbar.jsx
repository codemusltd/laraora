import React from 'react';
import ReactDOM from 'react-dom';

export const Nav = (props) =>{
    return(
      <div id='one' className='w3-padding'>
          <div className='w3-inblock'>
              <img src='http://static1.squarespace.com/static/53431644e4b0cf4885e907f7/t/593064de9de4bb482f2cc61b/1524592987210/?format=1500w' 
                alt='logo' id='logo' className='w3-padding'/> 
          </div>
          <div className='w3-inblock w3-display-right w3-padding-right'>
              <ul id='navList' className='w3-bar'>
                  <li className='w3-button w3-bar-item w3-s-cap'>reviews</li>
                  <li className='w3-button w3-bar-item w3-s-cap'>request appointments</li>
                  <li className='w3-button w3-bar-item w3-s-cap'>salon</li>
                  <li className='w3-button w3-bar-item w3-s-cap'>spa</li>
                  <li className='w3-button w3-bar-item w3-s-cap'>bridal</li>
                  <li className='w3-button w3-bar-item w3-s-cap'>apparel</li>
                  <li className='w3-button w3-bar-item w3-s-cap'>our team</li>
                  <li className='w3-button w3-bar-item w3-s-cap'>contact us</li>
              </ul>
          </div>
     </div>
    )
  }
  
  ReactDOM.render(<Nav/>, document.getElementById('navBar'));