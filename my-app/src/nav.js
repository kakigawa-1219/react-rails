import React ,{useState} from 'react'
import './Nav.css'
import Dropdown from './Dropdown.js'
import Dropdown2 from './Dropdown2.js'
import Dropdown3 from './Dropdown3.js'
import Dropdown4 from './Dropdown4.js'
import Dropdown5 from './Dropdown5.js'
function Nav(){
    const [click,setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const [dropdown2, setDropdown2] = useState(false);
    const [dropdown3, setDropdown3] = useState(false);
    const [dropdown4, setDropdown4] = useState(false);
    const [dropdown5, setDropdown5] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false); 
    
    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
          setDropdown(false);
        } else {
          setDropdown(true);
        }
      };
    
      const onMouseLeave = () => {
        if (window.innerWidth < 960) {
          setDropdown(false);
        } else {
          setDropdown(false);
        }
      };
     
      const onMouseEnter2 = () => {
        if (window.innerWidth < 960) {
          setDropdown2(false);
        } else {
          setDropdown2(true);
        }
      };
    
      const onMouseLeave2 = () => {
        if (window.innerWidth < 960) {
          setDropdown2(false);
        } else {
          setDropdown2(false);
        }
      };

      const onMouseEnter3 = () => {
        if (window.innerWidth < 960) {
          setDropdown3(false);
        } else {
          setDropdown3(true);
        }
      };
    
      const onMouseLeave3 = () => {
        if (window.innerWidth < 960) {
          setDropdown3(false);
        } else {
          setDropdown3(false);
        }
      };
      const onMouseEnter4 = () => {
        if (window.innerWidth < 960) {
          setDropdown4(false);
        } else {
          setDropdown4(true);
        }
      };
    
      const onMouseLeave4 = () => {
        if (window.innerWidth < 960) {
          setDropdown4(false);
        } else {
          setDropdown4(false);
        }
      };
      const onMouseEnter5 = () => {
        if (window.innerWidth < 960) {
          setDropdown5(false);
        } else {
          setDropdown5(true);
        }
      };
    
      const onMouseLeave5 = () => {
        if (window.innerWidth < 960) {
          setDropdown5(false);
        } else {
          setDropdown5(false);
        }
      };

        return(
            
            <>
            <nav className="navbar">
                {/*ハンバーガーメニュー */}
                
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
              
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li  className={click ? 'nav-item active' : 'nav-item'} onClick={closeMobileMenu}   onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}>
                        個人お客様
                        {dropdown && <Dropdown />}
                    </li>
                    <li className= 'nav-item' onClick={closeMobileMenu} onMouseEnter={onMouseEnter2}
                onMouseLeave={onMouseLeave2}>
                        法人お客様
                        {dropdown2 && <Dropdown2 />}
                    </li>
                    <li className="nav-item" onClick={closeMobileMenu} onMouseEnter={onMouseEnter3} onMouseLeave={onMouseLeave3}>
                        株主・投資家の皆様
                        {dropdown3 && <Dropdown3 />}
                    </li>
                    <li className="nav-item" onClick={closeMobileMenu} onMouseEnter={onMouseEnter4} onMouseLeave={onMouseLeave4}>
                        採用情報
                        {dropdown4 && <Dropdown4 />}
                    </li>
                    <li className="nav-item" onClick={closeMobileMenu} onMouseEnter={onMouseEnter5} onMouseLeave={onMouseLeave5}>
                        せらく銀行について
                        {dropdown5 && <Dropdown5 />}
                    </li>
                </ul>
            </nav>


            </>
        );
}
export default Nav