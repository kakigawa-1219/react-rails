import React,{useState} from 'react';
import './Dropdown.css';


function Dropdown2(){
  const [click, setClick] =useState(false);
  const handleClick = () => setClick(!click);
  return(
    <>

    <ul onClick={handleClick} className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
      <li>資金調達</li>
      <li>国際業務・外為取引 </li>
      <li> 福利厚生</li>
      <li> 事業戦略・経営相談</li>
      <li> 振込・入金確認の効率化</li>
      <li> 電子記録債権・手形関連</li>
    </ul>

    </>
  )
}
 

 
export default Dropdown2