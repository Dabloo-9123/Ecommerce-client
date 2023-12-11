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
    <h3 className='bestseller_text'>Best Seller</h3>
    <div className='parent'>
           
       { data && data.filter((item)=>Number(item.rating)===5).map((data)=>{
             return(
            <>
              <div className='cart'>
              <img src={data.img} alt='home'/>
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
    {/* <div className='video_div'>
      
    <video width="650" height="360" autoPlay muted loop>
    <source src='../body/videoad'/>
    
</video>

      
    </div> */}
<ImageSlider/>
   
    <h3 className='bestseller_text'>Top Sold Product</h3>
    <div className='parent'>
           
           { data && data.filter((item)=>Number(item.rating)===4).map((data)=>{
                 return(
                <>
                  <div className='cart'>
                  <img src={data.img} alt='home'/>
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
    </>
  )
}

export default Home