import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css";

const SignUp2 = () => {
  // React States
  const [errorAge, setErrorAge] = useState(false);
  const [errorLocation, setErrorLocation] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [age, setAge] = useState(0);
  const [location, setLocation] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    if (age < 18) {
      setErrorAge(true);
    }

    //here will be dispatchers
    navigate("/signup3");
  };

  const back = () => {
    //here will be dispatchers
    navigate("/signup");
  };

  // JSX code for login form
  const renderForm = (
    <div className='form'>
      <form onSubmit={handleSubmit}>
        <div className='input-container'>
          <label htmlFor='age'>What's your age?</label>
          <input
            type='number'
            name='age'
            required
            className={errorAge ? "error" : ""}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div className='input-container'>
          <label htmlFor='location'>What's your location? </label>
          <input
            type='text'
            name='location'
            required
            className={errorLocation ? "error" : ""}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className='button-container'>
          <button type='button' onClick={() => back()}>
            Back
          </button>
          <button type='submit'>Next</button>
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

export default SignUp2;
