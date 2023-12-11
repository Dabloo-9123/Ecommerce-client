

import { createSlice } from "@reduxjs/toolkit";

const initialState={
    cart:[],
    quantity:0
}
const cartSystem=createSlice({
    name:"user",
    initialState,
    reducers:{
        AddCart:(state,action)=>{
            state.cart.push(action.payload)
            // const find= state.cart.findIndex(item => item.id===action.payload.id)
            // if(find>=0){
            //   state.cart[find].quantity+=1
            // }
            // else{
            //     const temp={...action.payload,quantity:1}
            //     state.cart.push(temp)
            // }
           
        },
        DeleteCart:(state,action)=>{
            state.cart=state.cart.filter(item=> item.id !== action.payload.id)
        },
        increaseQuantity: (state, action) => {
            // const find= state.cart.findIndex(item => item.id===action.payload.id)
            // if(find>=0){
            //     state.cart[find].quantity+=1
               
            //   }},
            const item=state.cart.find(item => item.id ===action.payload.id)
            const fixed_Price=Number(action.payload.price);
            if(item){
                item.quant+=1;
                item.price=fixed_Price*item.quant
            }
        },
       decreaseQuantity: (state, action) => {
                // const find= state.cart.findIndex(item => item.id===action.payload.id)
                // if(find>=0){
                //     state.cart[find].quantity-=1
                    
                //   }
                
                const item=state.cart.find(item => item.id ===action.payload.id)
                const fixed_Price=Number(action.payload.price);
                if(item && item.quant >1){
                    item.quant-=1;
                    item.price=fixed_Price-item.price;
                 }
                },

                  
                
                
}
})

export const {AddCart,DeleteCart,increaseQuantity,decreaseQuantity}=cartSystem.actions
export default cartSystem.reducer