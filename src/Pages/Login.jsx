import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import { GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";


const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  const loginWithEmail = async (event) => {
    event.preventDefault();
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      console.log(result);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={loginWithEmail} className="login-form">
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="login-input"/>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="login-input"/>
        <button type="submit" className="login-button">Login with Email</button>
      </form>
      <button onClick={loginWithGoogle} className="login-button">
        Login with Google
      </button>

        <p>
        Don&apos;t have an account?
          </p> <Link to="/signup" className="signup-link">
          <Button variant="primary" className="buttonSignUp">
          Sign up
            </Button>
      </Link>
    </div>
  );
};

export default Login;
