import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { DeleteCart, decreaseQuantity, increaseQuantity } from '../../redux/cartSystem'
import './cart.css'


   
function Cart() {
    const Navi=useNavigate()
   
const {cart}=useSelector(item=>item.user)
const dispatch=useDispatch()
console.log(cart)
    
  return (
    <>
    <h1 className='cart_head'>Cart items :{cart.length}</h1>
    {
        cart&&cart.map((item)=>{
            return(
           <>
         
           <div className='cart_box'>
           <div className='cart_img'>
           <NavLink to={`/product/${item.id}`}  >
           <img src={item.img} alt='mobile'/>
           </NavLink>
           </div>

            <div className='cart_middle'>
            <p className='item_name'>{item.name.slice(0,50)}</p>
            <p className='item_price'>Price ${item.price}</p>
            <label onClick={()=>{dispatch(decreaseQuantity(item))} }>-</label>
            <label className='item_price'>{item.quant}</label>
            <label onClick={()=>{dispatch(increaseQuantity(item))}}>+</label>
            </div>


           <div className='cart_buttons'>
           <button onClick={()=>dispatch(DeleteCart(item))}>
              Remove
               </button>
               <button onClick={()=>Navi('/')}>Shop more</button>
           </div>
           
           </div>
           
           
             </>
            
             
            )
        })
    }
    
    </>
  )
}

export default Cart