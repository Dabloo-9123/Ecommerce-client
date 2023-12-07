import axios from 'axios'
import React, { useEffect, useState } from 'react'

function All() {
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
           
       { data && data.map((item)=>{
             return(
            <>
              <div className='cart'>
              <img src={item.image_} alt='all'/>
              <p>{item.name.slice(0,50)}</p>
             <div className='cart-bottom'>
             <p>Price ${item.price}</p>
              <button >Add to cart</button>
             </div>
              </div>
              </>
             
              
             )
         })}
    </div>
    </>
  )
}

export default All