import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG8.png"
          alt=""
        />
      </Link>

      <div className="login_container">
        <h2>Sign In</h2>
        <form>
          <h5>Email</h5>
          <input type="text" />

          <h5>Password</h5>
          <input type="password" />

          <button className="signin-btn">Sign In </button>
        </form>

        <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
     <button className="register-acc-btn">Create an account</button>
     
      </div>
    </div>
  );
}

export default Login;
