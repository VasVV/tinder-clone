import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  // React States
  const [errorUsername, setErrorUsername] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async () => {
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/main");
      })
      .catch((error) => {
        const errorCode = error.code;
        if (errorCode === "auth/wrong-password") {
          setErrorPassword(true);
        } else if (errorCode === "auth/user-not-found") {
          setErrorUsername(true);
        }
      });
  };

  // JSX code for login form
  const renderForm = (
    <div className='form'>
      <div>
        <div className='input-container'>
          <label htmlFor='email'>E-mail </label>
          <input
            type='email'
            name='email'
            required
            className={errorUsername ? "error" : ""}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='input-container'>
          <label htmlFor='password'>Password </label>
          <input
            type='password'
            name='pass'
            required
            className={errorPassword ? "error" : ""}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className='button-container'>
          <button onClick={() => handleSubmit()}>Submit</button>
        </div>
      </div>
    </div>
  );

  return (
    <div className='app'>
      <div className='login-form'>
        <div className='title'>Sign In</div>
        <Link to='signup'>Don't have an account? Sign up!</Link>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
};

export default Login;
