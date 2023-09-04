import React from "react";
import Login from "./pages/Login/Login.js";
import SignUp from "./pages/SignUp/SignUp.js";
import SignUp2 from "./pages/SignUp/SignUp2.js";
import SignUp3 from "./pages/SignUp/SignUp3.js";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='signup' element={<SignUp />} />
        <Route path='signup2' element={<SignUp2 />} />
        <Route path='signup3' element={<SignUp3 />} />
      </Routes>
    </>
  );
};

export default App;
