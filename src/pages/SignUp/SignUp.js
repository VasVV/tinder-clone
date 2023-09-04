import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
  // React States
  const [errorUsername, setErrorUsername] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1",
    },
    {
      username: "user2",
      password: "pass2",
    },
  ];

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorPassword(true);
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorUsername(true);
    }
  };

  // JSX code for login form
  const renderForm = (
    <div className='form'>
      <form onSubmit={handleSubmit}>
        <div className='input-container'>
          <label>What's your name? </label>
          <input
            type='text'
            name='uname'
            required
            className={errorUsername ? "error" : ""}
          />
        </div>
        <div className='input-container'>
          <label>Enter your password </label>
          <input
            type='password'
            name='pass'
            required
            className={errorPassword ? "error" : ""}
          />
        </div>
        <div className='button-container'>
          <input type='submit' />
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

export default SignUp;
