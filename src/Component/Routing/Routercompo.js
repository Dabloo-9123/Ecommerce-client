import React from 'react'
import {  NavLink, Route, Routes } from 'react-router-dom'
import Home from '../body/Home'
import Laptop from '../body/Laptop'
import Mobile from '../body/Mobile'
import Footware from '../body/Footware'
import Signup from '../header/Signup'
import Login from '../header/Login'
// import All from '../body/All'

import '../header/navbar.css'
import Headphones from '../body/Headphones'
import SingleCart from '../singlecard/SingleCart'
import Cart from '../body/Cart'
import { useSelector } from 'react-redux'

function Routercompo() {
  const {cart}=useSelector(item=>item.user)
  return (
   <>
   <div className='nav'>
   <h3 className='icon'>Shop4Home</h3>
   <input type='text' placeholder='Search item'></input>
   <div><NavLink to='/'>Home</NavLink></div>
   {/* <div><NavLink to='/all'>All</NavLink></div> */}
   <div><NavLink to='/laptop'>Laptop</NavLink></div>
   <div><NavLink to='/mobile'>Mobile</NavLink></div>
   <div><NavLink to='/footware'>Footware</NavLink></div>
   <div><NavLink to='/headphones'>HeadPhones</NavLink></div>
   <div><NavLink to='/login'>Login</NavLink></div>
   <div><NavLink to='/signup'>Signup</NavLink></div>
   <div><NavLink to='/cart'>cart <label>{cart.length}</label></NavLink></div>
   
   </div>

    <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        {/* <Route path='/all' element={<All/>}/> */}
        <Route path='/laptop' element={<Laptop/>}/>
        <Route path='/mobile' element={<Mobile/>}/>
        <Route path='/footware' element={<Footware/>} />
        <Route path='/headphones' element={<Headphones/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/:product/:id' element={<SingleCart/>} />
        <Route path='/cart' element={<Cart/>}/>
        {/* <Route path='*' element={<Signup/>} /> */}
     </Routes>
     
     

  
   </>
  )
}

export default Routercompo