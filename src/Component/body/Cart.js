import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { DeleteCart, decreaseQuantity, increaseQuantity } from '../../redux/cartSystem'
import './cart.css'
import {loadStripe} from '@stripe/stripe-js';


   
function Cart() {
    const Navi=useNavigate()
   
const {cart,totalAmount}=useSelector(item=>item.user)

const dispatch=useDispatch()
console.log(cart)
console.log(totalAmount)
    const makePayment= async ()=>{
     const stripe=await loadStripe("pk_test_51OMl3QSJ2bUiRJKA0Gfkb1nXqYGELlsi4hlAA8Fr9AHAa6p4aGP2GnYZYv6UHGX6ShgWdWKvv5UUBJxmek88OoHm00A6zF4WpD")
    const body={
      products:cart
    }
    const header={
      "Content-Type":"application/json"
    }
    const response= await fetch("https://ecommerce-server-r7xn.onrender.com/api/checkout",{
      method:"POST",
      headers:header,
      body:JSON.stringify(body)
    })
    const session= await response.json()

    const result=  stripe.redirectToCheckout({
      sessionId:session.id
    })
    if(result.error){
      console.log(result.error);
    }
    }
  return (
    <>
    <h1 className='cart_head'>Cart items :{cart.length}</h1>
    {
        cart && cart.map((item)=>{
            return(
           <>
         
           <div className='cart_box'>
           <div className='cart_img'>
           <NavLink to={`/product/${item.id}`}  >
           <img src={item.image} alt='mobile'/>
           </NavLink>
           </div>

            <div className='cart_middle'>
            <p className='item_name'>{item.name.slice(0,50)}</p>
            <p className='item_price'>Price ${item.price}</p>
            <label onClick={()=>{dispatch(decreaseQuantity({id:item.id,price:Number(item.price)}))} }>-</label>
            <label className='item_price'>{item.quantity}</label>
            <label onClick={()=>{dispatch(increaseQuantity({id:item.id,price:Number(item.price)}))}}>+</label>
            </div>


           <div className='cart_buttons'>
           <button onClick={()=>dispatch(DeleteCart({id:item.id,quantity:Number(item.quantity),price:Number(item.price)}))}>
              Remove
               </button>
               
           </div>
           
           </div>
           
          
             </>
            
             
            )
        })
    }
    <div className='checkout'>
      <h3>Total Cart Price : ₹{totalAmount}</h3>
    <button className='checkout_button' onClick={makePayment}>Checkout</button>
      
    </div>
    <button className='shopmore_button' onClick={()=>Navi('/')}>Shop more</button>
    </>
  )
}

export default Cart