import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css";
import { useSelector, useDispatch } from "react-redux";
import { changeInfo } from "../../redux/userInfo";

const SignUp = () => {
  // React States
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorUsername, setErrorUsername] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const navigate = useNavigate();

  const userInfo = useSelector((state) => state.userInfo);

  const dispatch = useDispatch();

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
    dispatch(changeInfo({ userName, password }));
    navigate("/signup2");
  };

  // JSX code for login form
  const renderForm = (
    <div className='form'>
      <form onSubmit={handleSubmit}>
        <div className='input-container'>
          <label htmlFor='uname'>What's your name? </label>
          <input
            type='text'
            name='uname'
            required
            className={errorUsername ? "error" : ""}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className='input-container'>
          <label htmlFor='pass'>Enter your password </label>
          <input
            type='password'
            name='pass'
            required
            className={errorPassword ? "error" : ""}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className='button-container'>
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

export default SignUp;
