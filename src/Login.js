import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { useState } from "react";
import { auth } from "./firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signin = (e) => {
    e.PreventDefault();
  };

  const register = (e) => {
    e.PreventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // success
        console.log(auth);
      })
      .catch((error) => alert(error.message));
  };

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
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" onClick={signin} className="signin-btn">
            Sign In{" "}
          </button>
        </form>

        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
        <button onClick={register} className="register-acc-btn">
          Create an account
        </button>
      </div>
    </div>
  );
}

export default Login;
