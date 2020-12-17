import React,{useState} from 'react';
import './Dropdown.css';
/*  Dropdown~Dropdown5　まとめる予定 */
function Dropdown(){
  const [click, setClick] =useState(false);
  const handleClick = () => setClick(!click);
  return(
    <>
    <ul onClick={handleClick} className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
      <li>普通預金</li>
      <li> 定期預金・積立</li>
      <li> 外貨預金</li>
      <li> 外債</li>
      <li> ファンドラップ</li>
      <li> 個人向け国債</li>
      <li> 退職金運用のご案内</li>
    </ul>

  
    </>
  )
}
 

 
export default Dropdown