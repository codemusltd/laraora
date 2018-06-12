import React from 'react';
import ReactDOM from 'react-dom';

export const Nav = (props) =>{
  return(
    <div id='one' classNameName='w3-padding'>
        <div classNameName='w3-inblock'>
            <img src='http://static1.squarespace.com/static/53431644e4b0cf4885e907f7/t/593064de9de4bb482f2cc61b/1524592987210/?format=1500w' 
              alt='logo' id='logo' classNameName='w3-padding'/> 
        </div>
        <div className='w3-inblock w3-display-right w3-padding-right'>
            <ul id='navList' classNameName=''>
                <li classNameName='w3-button w3-bar-item w3-s-cap'>reviews</li>
                <li classNameName='w3-button w3-bar-item w3-s-cap'>request appointments</li>
                <li classNameName='w3-button w3-bar-item w3-s-cap'>salon</li>
                <li classNameName='w3-button w3-bar-item w3-s-cap'>spa</li>
                <li classNameName='w3-button w3-bar-item w3-s-cap'>bridal</li>
                <li classNameName='w3-button w3-bar-item w3-s-cap'>apparel</li>
                <li classNameName='w3-button w3-bar-item w3-s-cap'>our team</li>
                <li classNameName='w3-button w3-bar-item w3-s-cap'>contact us</li>
            </ul>
        </div>
   </div>
  )
}

// ReactDOM.render(<Nav/>, document.getElementById('navBar'));