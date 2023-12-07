import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Footware()  {
  const[data,setdata]=useState('')

  useEffect(()=>{
     axios.get('https://ecommerce-server-r7xn.onrender.com/api/data')
     .then(res=>res.data)
     .then(store=>{
      // console.log(store);
      setdata(store)
     })
  },[])
  console.log(data);
  return (
    <>
  
    <div className='parent'>
           
       { data && data.filter((item)=>item.catergory==='footware').map((item)=>{
             return(
            <>
              <div className='cart'>
              <img src={item.img} alt='footware'/>
              <p>{item.name.slice(0,50)}</p>
             <div className='cart-bottom'>
             <p>Price ${item.price}</p>
              {/* <p><AddToCartButton/></p> */}
             </div>
              </div>
              </>
             
              
             )
         })}
    </div>
    </>
  )
}

export default Footware