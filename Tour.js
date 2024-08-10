import React,{useState} from "react";
import TourDisplay from "./TourDisplay";

const Tour = ({id,image,info,price,name,removeTour}) =>{
    const  [readMore ,setReadMore] = useState(false)

return (
    <article className='secondcontainer' key={id}>
                
    <div className='image'><img src ={image} alt={name}/>
         <span className='pricelist'>{price}</span>
         </div>
     
     <div className='thirdcontainer'>
      <h2>{name}</h2>
      <p>{readMore? info: `${info.substring(0,200)}...`   }
       <button className='secondbtn' onClick ={()=> setReadMore(!readMore)} >
         {readMore? `show less`:`show more`}
       </button>
       </p>
      
     <button className='mybtn' onClick={()=>removeTour(id)} >Not Interested</button>
    
     </div>


 </article>
)
}

export default Tour