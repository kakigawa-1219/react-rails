import React , {Component} from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import './main1.css'
class Main1 extends Component{
    render(){
        return(
         <>
         <div id="main1">
         <div id="main-image">
         
         {(() => {   
            
                   const settings = {
                       customPaging:function(i){
                           return(
                               <a className="thumb_list"><img src={`./images/main0${i+1}_thumb.png`}/> </a>
                           );
                       },
                    dots:true,
                    dotsClass: "slick-dots slick-thumb",
                    speed: 500,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay:true,
                    autoplaySpeed:5000,
                   nextArrow:<img src="./images/arrow_right.png" alt=""></img>,
                   prevArrow:<img src="./images/arrow_left.png" alt=""></img>,
                     };
                 
                  return(
                  
             <Slider {...settings}>
                 <div className="main-image"><img src={"./images/main01.png"}  alt=""></img></div>
                 <div className="main-image"><img src={"./images/main02.png"}  alt=""></img></div>
                 <div className="main-image"><img src={"./images/main03.png"}  alt=""></img></div>
             
             </Slider>
            
             );
             
     } )()}        
                           
                         
             
             
             
        </div>
         </div>
        
            
         
         
      
        
        
         </>
        )
    }
 
}
export default Main1