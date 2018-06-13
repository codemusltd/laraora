import React from 'react';
import ReactDOM from 'react-dom';

export const Copyright = (props) =>{
    return(
        <div id='seven' className='w3-center w3-padding w3-black'>
            <p className='w3-padding w3-text-grey'>© Beauty Boutique 2014 All Rights Reserved.</p>
        </div>  
    )
  }
  
ReactDOM.render(<Copyright/>, document.getElementById('copy'));
