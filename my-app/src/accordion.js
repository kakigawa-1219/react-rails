import React from "react";

const Accordion = ({title ,Accordion_item, active , setActive}) => {
  return(
    
    <>
      <div className="accordion" >
        <div className="accordionHeading" onClick={() => setActive(title)}> 
          <h2>{title}</h2>
        </div>
          <div className={(active === title ? "show" : "") + " accordionContent"}> 
           {Accordion_item}
          </div>
      </div>
    </>
  )
}
export default Accordion