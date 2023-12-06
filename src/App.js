
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './Component/header/Navbar';
import FooterComp from './Component/footer/FooterComp';


function App() {
//   // const products =[{
//   //   catergory:'laptop',
//   //   name:'HP Laptop 15s, 12th Gen Intel Core i3-1215U, 15.6-inch (39.6 cm)',
//   //   price:'40,836',
//   //   description:'【6-core 12th Gen Intel Core i3-1215U】 8 threads and 10MB L3 cache deliver high performance and instant responsiveness. The Intel UHD graphics help you dive into crisp, stunning visuals.【Upgraded memory and storage】 8GB DDR4 RAM and 512GB SSD help you undertake improved multitasking with ample of storage and higher-bandwidth memory. Now, create, browse, and work as you please.',
//   //   rating:'4',
//   //   image_:'https://m.media-amazon.com/images/I/71Blj59DzzL._SX425_.jpg',
//   //   id:1,
//   //   quantity:1
//   // },
//   // {
//   //   catergory:'laptop',
//   //   name:'HP Laptop 15s, AMD Ryzen 3 5300U, 15.6-inch (39.6 cm)',
//   //   price:'35,490',
//   //   description:'【4-core AMD Ryzen 3 5300U】8 threads and 4MB L3 cache deliver powerful performance and swift responsiveness. The AMD Radeon graphics help you experience crisp visuals with vivid clarity.',
//   //   rating:'3.5',
//   //   image_:'https://m.media-amazon.com/images/I/71xakkiDCNL._SX569_.jpg',
//   //   id:2,
//   //   quantity:1
//   // },
//   // {
//   //   catergory:'laptop',
//   //   name:'HP Laptop 15s, 12th Gen Intel Core i3-1215U, 15.6-inch (39.6 cm)',
//   //   price:'44,780',
//   //   description:'out this item 【6-core 12th Gen Intel Core i3-1215U】Efficiently multitask with 12th Gen Intel Core i3-1215U processor, boasting 8 threads and 10MB L3 cache. Experience heightened productivity and responsiveness.',
//   //   rating:'4.2',
//   //   image_:'https://m.media-amazon.com/images/I/71W5FiBP6WL._SX425_.jpg',
//   //   id:3,
//   //   quantity:1
//   // },
//   // {
//   //   catergory:'laptop',
//   //   name:'HP Laptop 15, 12th Gen i5-1235U, 15.6-inch (39.6 cm), FHD',
//   //   price:'54,880',
//   //   description:'Processor: Intel Core i5-1235U (up to 4.4 GHz with Intel Turbo Boost Technology,12 MB L3 cache, 10 cores, 12 threads)| Memory: 8 GB DDR4-3200 MHz RAM (1 x 8 GB)| Storage: 512 GB PCIe NVMe M.2 SSD',
//   //   rating:'5',
//   //   image_:'https://m.media-amazon.com/images/I/71J17FvBvtL._SX569_.jpg',
//   //   id:4,
//   //   quantity:1
//   // },]

  return (
  <>
  <BrowserRouter>
  <Navbar/>
  <FooterComp/>
  </BrowserRouter>
 


  </>
  );
}

export default App;


// import React, { useReducer } from 'react';
// import Product from './Component/body/Productcompo';
// import Cart from './Component/body/Cart';


// const initialState = {
//   products: [
//     { id: 1, name: 'Product 1', price: 20, quantity: 0 },
//     { id: 2, name: 'Product 2', price: 30, quantity: 0 },
//     // Add more products
//   ],
//   cart: [],
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'ADD_TO_CART':
//       const existingItemIndex = state.cart.findIndex(item => item.id === action.product.id);
//       if (existingItemIndex !== -1) {
//         const updatedCart = [...state.cart];
//         updatedCart[existingItemIndex].quantity++;
//         return { ...state, cart: updatedCart };
//       } else {
//         return { ...state, cart: [...state.cart, { ...action.product, quantity: 1 }] };
//       }

//     case 'REMOVE_FROM_CART':
//       return { ...state, cart: state.cart.filter(item => item.id !== action.id) };

//     case 'INCREMENT':
//       return {
//         ...state,
//         cart: state.cart.map(item =>
//           item.id === action.id ? { ...item, quantity: item.quantity + 1 } : item
//         ),
//       };

//     case 'DECREMENT':
//       return {
//         ...state,
//         cart: state.cart.map(item =>
//           item.id === action.id ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item
//         ),
//       };

//     default:
//       return state;
//   }
// };

// const App = () => {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   return (
//     <div>
//       <div>
//         <h2>Product List</h2>
//         {state.products.map(product => (
//           <Product key={product.id} product={product} dispatch={dispatch} />
//         ))}
//       </div>
//       <Cart cart={state.cart} dispatch={dispatch} />
//     </div>
//   );
// };

// export default App;