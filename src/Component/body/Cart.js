// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import {  decreaseQuantity, deleteFromCart, selectCart } from '../redux/slice/Slice'

// function Cart() {
//     const dispatch=useDispatch()
//     const cartItems=useSelector(state=>state.cart.item)
//     const cart=useSelector(selectCart)
//     console.log(cartItems);
//     console.log(cart);

//     const handleRemoveFromCart=(productId)=>{
//         console.log("product deleted");
//         dispatch(deleteFromCart(productId))
//     }
//     // const handleIncreaseQuantity=(product)=>{
//     //     dispatch(increaseQuantity(product))
//     // }
//     const handleDecreaseQuantity=(product)=>{
//         dispatch(decreaseQuantity(product))
//     }
//   return (
//    <>
//    <h2>Shoppin cart</h2>
//    {
//     cart && cart.items.map(item =>(
          
//         <div key={item.id} style={{border:"solid",borderColor:"black"}}>
//         <p>{item.name}</p>
//         <img src={item.image_} alt='image not found'></img>
//         <p>{item.price} Quantity: {item.quantity}</p>
//         <button onClick={handleDecreaseQuantity(item.id)}>-</button>
//         {/* <button onClick={handleIncreaseQuantity(item.id)}>+</button>  */}
//         <button onClick={()=>{handleRemoveFromCart(item.quantity)}}>Remove from cart</button>

//         </div>
//     ))
//    }
//    </>
//   )
// }

// export default Cart

import React from 'react';

const Cart = ({ cart, dispatch }) => {
  const calculateItemPrice = (item) => {
    return item.quantity * item.price;
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + calculateItemPrice(item), 0);
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.map(item => (
        <div key={item.id}>
          <p>{item.name} - ${item.price} - Quantity: {item.quantity} - Item Total: ${calculateItemPrice(item)}</p>
          <button onClick={() => dispatch({ type: 'INCREMENT', id: item.id })}>+</button>
          <button onClick={() => dispatch({ type: 'DECREMENT', id: item.id })}>-</button>
          <button onClick={() => dispatch({ type: 'REMOVE_FROM_CART', id: item.id })}>Remove from Cart</button>
        </div>
      ))}
      <p>Total Cart Price: ${calculateTotalPrice()}</p>
    </div>
  );
};

export default Cart;