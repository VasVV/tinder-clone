import React from "react";
import Login from "./pages/Login/Login.js";
import SignUp from "./pages/SignUp/SignUp.js";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='signup' element={<SignUp />} />
      </Routes>
    </>
  );
};

export default App;
