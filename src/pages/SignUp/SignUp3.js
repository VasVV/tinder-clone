import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css";

const SignUp3 = () => {
  // React States
  const [errorPhoto, setErrorPhoto] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [photo, setPhoto] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();
    //here will be dispatchers
    navigate("/");
  };

  const back = () => {
    //here will be dispatchers
    navigate("/signup2");
  };

  // JSX code for login form
  const renderForm = (
    <div className='form'>
      <form onSubmit={handleSubmit}>
        <div className='input-container'>
          <label htmlFor='photo'>Upload your photo</label>
          <input
            type='file'
            name='photo'
            required
            className={errorPhoto ? "error" : ""}
          />
        </div>
        <div className='input-container'>
          <label htmlFor='email'>What's your e-mail?</label>
          <input
            type='email'
            name='email'
            required
            className={errorEmail ? "error" : ""}
          />
        </div>
        <div className='button-container'>
          <button type='button' onClick={() => back()}>
            Back
          </button>
          <button type='submit'>Finish</button>
        </div>
      </form>
    </div>
  );

  return (
    <div className='app'>
      <div className='login-form'>
        <div className='title'>Sign Up</div>
        <Link to='/'>Already have an account? Sign in!</Link>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
};

export default SignUp3;
