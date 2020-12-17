import React,{useState} from 'react';
import './Dropdown.css';

function Dropdown3(){
  const [click, setClick] =useState(false);
  const handleClick = () => setClick(!click);
  return(
    <>

    <ul onClick={handleClick} className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
      <li>せらくグループの概要</li>
      <li> 決算公告</li>
      <li> 社債情報</li>
    </ul>
 
    </>
  )
}
 

 
export default Dropdown3