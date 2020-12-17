import React , {Component} from 'react'
import Tab_sum from './Tab'
import ModalWindow from './modal'
import ModalWindow2 from './modal2'
import Accordion2 from './accordion2'
import './main2.css'
class Main2 extends Component{
    render(){
       
        return(
         <>
         <div id="main2">

            <div id="main2_left">
                <div id="login">
                    <h2>インターネットバンキング</h2>
                    <div >せらく銀行インターネットバンキング</div>
                    <ModalWindow />
                    <ModalWindow2 />
                    
                   <div><a href="#">＞パスワード忘れた方はこちら</a></div>
                </div>
                <div id="service_guide">
                    <h2>サービスのご案内</h2>
                    <ul>
                        <li>店舗<br></br>・<br></br>ATM検索</li>
                        <li>資料請求</li>
                        <li>金利一覧</li>
                        <li>手数料</li>
                        <li>よくある<br></br>ご質問</li>
                        <li>投資信託基準<br></br>価格一覧</li>
                    </ul>

                </div>

                <div id="guide1">
                    <ul>
                        <li>口座開設のご案内</li>
                        <li>金融経済ニュース</li>
                        <li>詐欺に注意！！</li>
                    </ul>
                </div>

                <div id="guide2">
                    <ul>
                        <li>テレビCM・動画のご紹介</li>
                        <li>今から考える教育ローン</li>
                    </ul>
                </div>
                <div id="guide3">
                   <div><img src="./images/caution.png"></img></div>
                </div>

            </div>
            <div id="main2_right">

                <div id="main2_right_top">
                    <Accordion2 />
                </div>

                <div id="main2_right_bottom"> 
                    <Tab_sum />
                </div>
            </div>
            
         </div>
         
        
         </>
        )
    }
 
}
export default Main2