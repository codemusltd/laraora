import React from 'react';
import ReactDOM from 'react-dom';

export const Subscribe = (props) =>{
    return(
        <div id='six' className='w3-container w3-margin-left w3-center w3-padding '>
                <p className='w3-padding w3-text-grey'>SUBSCRIBE</p>
                <p>Sign up with your email address to receive news and updates.</p>
                <form className='w3-container w3-bar'>
                    <input className='w3-input w3-bar-item w3-border-grey' type='text' placeholder='Email Address'/>
                    <input className='w3-button w3-bar-item w3-grey w3-text-white w3-margin-left' type='button' value='SIGN UP'/>
                </form>
        </div>
    )
  }
  
ReactDOM.render(<Subscribe/>, document.getElementById('sub'));