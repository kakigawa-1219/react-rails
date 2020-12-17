import React, { Component } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import './scroll.css'
class ScrollUp extends Component {

  scrollToTop = () => {
    scroll.scrollToTop(); 
  };

  render() {
    return(
      <div className="scroll scroll-up">
        <div className="arrow bounce">
          <img src="./images/arrow_up.png" onClick={this.scrollToTop} className="fa fa-chevron-circle-up" />
        </div>
      </div>   
    );
  }

}



export default ScrollUp;