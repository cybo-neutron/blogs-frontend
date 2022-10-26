import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";

function RegisterLogin() {
  const [showLogin, setShowLogin] = useState(true);

  function toggleLoginRegister() {
    setShowLogin((prev) => !prev);
  }

  return (
    <>
      {showLogin ? (
        <Login toggleLoginRegister={toggleLoginRegister} />
      ) : (
        <Register toggleLoginRegister={toggleLoginRegister} />
      )}
    </>
  );
}

export default RegisterLogin;
