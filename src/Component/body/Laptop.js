import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

function Laptop() {
  const[data,setdata]=useState('');
  const [Loader,setLoader]=useState(true)

  useEffect(()=>{
     axios.get('https://ecommerce-server-r7xn.onrender.com/api/data')
     .then(res=>res.data)
     .then(store=>{
      // console.log(store);
      setdata(store)
      setLoader(false)
     })
  },[])
  console.log(data);
  
  return (
    <>
  {Loader ? <h1>Loading</h1> :
   <div className='parent'>
           
           { data && data.filter((item)=>item.catergory==='laptop').map((item)=>{
                 return(
                <>
                <NavLink to={`/product/${item.id}`} className='cart' >
                
                  <img src={item.img} alt='laptop'/>
                  <p>{item.name.slice(0,50)}</p>
                 <div className='cart-bottom'>
                 <p>Price ${item.price}</p>
                  <button >Add to cart</button>
                 </div>
                
                 </NavLink>
                  </>
                 
                  
                 )
             })}
        </div>}
   
    </>
  )
}

export default Laptop