import React , {Component} from 'react'
import './header.css';
class Header extends Component{
    render(){
        return(
         <>
         <header>
         <h1><img src="./images/logo.png" alt="" id="link-top"></img> </h1>
        
         <div id="code">金融機関コード：0917</div>
         <div id="font-size">
             <div id="moji-size">文字サイズ</div>
             <div id="syou"><img src="./images/fontsize_s.png" alt=""></img> </div>
             <div id="tyuu"><img src="./images/fontsize_m.png" alt=""></img> </div>
             <div id="dai"><img src="./images/fontsize_l.png" alt=""></img> </div>
         </div>
     
             <div id="eigo">
                 <div id="global"><u>global site</u></div>
                 <div id="site-map"><u>site map</u></div>
             </div>
                <div id="search" ><input type="text" placeholder="検索ワードを入力"></input></div> 
                 <input type="image"src="./images/search.png" id="button" alt=""></input> 
         
         </header>
         </>
        )
    }
 
}
export default Header