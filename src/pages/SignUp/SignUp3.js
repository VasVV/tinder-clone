import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css";

const SignUp3 = () => {
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
    var { age, location } = document.forms[0];
    if (age.value < 18) {
      setErrorAge(true);
    }
  };

  // JSX code for login form
  const renderForm = (
    <div className='form'>
      <form onSubmit={handleSubmit}>
        <div className='input-container'>
          <label htmlFor='photo'>Upload your photo</label>
          <input
            type='file'
            name='age'
            required
            className={errorAge ? "error" : ""}
          />
        </div>
        <div className='button-container'>
          <button type='button' onClick={() => navigate("/signup2")}>
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
