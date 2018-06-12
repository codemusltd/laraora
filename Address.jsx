import React from 'react';
import ReactDOM from 'react-dom';

export const Address = (props) =>{
    return(
        <div id='five' className='w3-container w3-center w3-padding w3-text-grey'>
            <address>
            BEAUTY BOUTIQUE <br/>
            107 SIGNATURE PLACE<br/>
            LEBANON, TN 37087<br/>
            615-547-4468<br/>
            </address>
        </div>  
    )
  }
  
//   ReactDOM.render(<Address/>, document.getElementById('address'));