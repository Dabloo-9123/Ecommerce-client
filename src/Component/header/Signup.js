import axios from 'axios'
import React, { useState } from 'react'
import './signup.css'

function Signup() {
    
    const[name,setname]=useState('')
    const[email,setemail]=useState('')
    const[password,setpassword]=useState('')
    const[phone,setphone]=useState()
    

    const handleSubmit= async(e)=>{
   e.preventDefault()
   const tempobj={
    name:name,
    email:email,
    password:password,
    phone:phone
   }
   try{
    const response= await axios.post('https://ecommerce-server-r7xn.onrender.com/api/register',tempobj);
    console.log('response :',response.data);
    alert(response.data)
   }
   catch(err){
    console.log('error',err);
    
   }
// axios.post('https://ecommerce-server-r7xn.onrender.com/', tempobj)
//   .then(response => {
//     // Handle successful response
//     console.log(response.data);
//   })
//   .catch(error => {
//     // Handle error
//     console.error('Error:', error.message);
//   });
   

    }
   
  return (
    <>
   <div className='signup_main'>
   <h2 className='register-text'>Register</h2>
    <form>
        <input type='text' placeholder='Enter name' value={name} 
        onChange={(e)=>setname(e.target.value)}></input><br></br>

        <input type='text' placeholder='Enter Email' value={email}
         onChange={(e)=>setemail(e.target.value)}></input><br></br>

        <input type='text' placeholder='Enter Password' value={password}
         onChange={(e)=>setpassword(e.target.value)}></input><br></br>

        <input type='text' placeholder='Enter Phone' value={phone}
         onChange={(e)=>setphone(e.target.value)}></input><br></br>

        <button className='signup_button' onClick={handleSubmit}>Submit</button>
    </form>
   </div>
    </>
  )
}

export default Signup