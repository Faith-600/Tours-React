import React from "react";
import Tour from "./Tour";

const TourDisplay = ({visit,removeTour})=>{
  return (
<div>
   <h1>Our Tours<div className='underline'></div></h1>
   <section className='maincontainer'> 
  {visit.map((tour =>{
    return <Tour key = {tour.id} {...tour} removeTour={removeTour}></Tour>
  }))}
   </section>
  </div>

  )


}

export default TourDisplay