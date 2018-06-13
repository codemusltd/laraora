import React from 'react';
import ReactDOM from 'react-dom';

export const Contact = (props) =>{
    return(
        <div id='four' className='w3-container w3-center w3-padding'>
            <img src='https://static1.squarespace.com/static/53431644e4b0cf4885e907f7/t/56367a78e4b078ea327d5356/1446411139019/FullSizeRender.jpg?format=1500w' 
                alt='contact' class=''/>
        </div>  
    )
  }
  
ReactDOM.render(<Contact/>, document.getElementById('contact'));