import React,{useState} from 'react';
import './Dropdown.css';
function Dropdown4(){
  const [click, setClick] =useState(false);
  const handleClick = () => setClick(!click);
  return(
    <>

    <ul onClick={handleClick} className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
      <li>新卒採用</li>
      <li> キャリア採用</li>
      <li> 海外現地採用</li>
      <li> 契約社員のお仕事</li>
      <li> 派遣社員のお仕事</li>
    </ul>

 
    </>
  )
}
 

 
export default Dropdown4