import axios from "axios";
import React, { useState } from "react";

import './login.css'

function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const tempobj = {
      email: email,
      password: password,
    };
    try {
      const response = await axios.post(
        "https://ecommerce-server-r7xn.onrender.com/api/login",
        tempobj
      );
      console.log("response", response.data);
      alert(response.data);
      console.log(response);
    } catch (err) {
      console.log("err", err);
    }
  };

  return (
    <>
     <div className="login_main">
     <h2 className="login_heading">Sign in to Account</h2>
      <form>
        <input
          type="text"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
        ></input>
        <br></br>

        <input
          type="text"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        ></input>
        <br></br>

        <button className="signin_button" onClick={handleSubmit}>Sign In</button>
      </form>
     </div>
    </>
  );
}

export default Login;
