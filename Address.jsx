import React from 'react';
import ReactDOM from 'react-dom';

export const Address = (props) =>{
    return(
        <div id='five' className='w3-margin-left w3-center w3-padding w3-black w3-text-grey'>
                <address className='w3-normal'>
                BEAUTY BOUTIQUE <br/>
                107 SIGNATURE PLACE<br/>
                LEBANON, TN 37087<br/>
                615-547-4468<br/>
                </address>
        </div>  
    )
  }
  
ReactDOM.render(<Address/>, document.getElementById('add'));