import React,{useState} from 'react';
import './Dropdown.css';
function Dropdown5(){
  const [click, setClick] =useState(false);
  const handleClick = () => setClick(!click);
  return(
    <>

    <ul onClick={handleClick} className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
      <li>ごあいさつ</li>
      <li> 事業内容</li>
      <li> 企業の社会的責任(CSR)</li>
      <li> 役員一覧</li>
      <li> 組織体制</li>
      <li> お問合わせ先</li>
    </ul>

    </>
  )
}
 

 
export default Dropdown5