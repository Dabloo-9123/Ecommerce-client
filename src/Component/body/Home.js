import React, { useEffect, useState } from 'react'
import axios from "axios"
import './home.css'
import ImageSlider from './Imageslider'

function Home() {
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
    <ImageSlider/>
    <h3 className='bestseller_text'>Best seller</h3>
    <div className='parent'>
           
       { data && data.filter((item)=>item.id<8).map((data)=>{
             return(
            <>
              <div className='cart'>
              <img src={data.image_} alt='image not found'/>
              <p className='product_name'>{data.name.slice(0,30)}</p>
             <div className='cart-bottom'>
             <p>Price ${data.price}</p>
              <button >Add to cart</button>
             </div>
        
              </div>


              
              </>
             
              
             )
         })}
    </div>
    <div className='video_div'>
      <video>

      </video>
    </div>
    </>
  )
}

export default Home