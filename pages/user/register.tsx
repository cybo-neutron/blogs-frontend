import React from "react";
import Register from "../../components/Forms/Register";

function register() {
  return (
    <div className="w-screen h-screen flex  ">
      <div className="bg-zinc-700 h-full hidden sm:flex sm:w-1/2 lg:w-7/12">
        <img src="/scenery1.jpg" alt="" className="h-full object-cover " />
      </div>
      <div className="w-full sm:w-1/2 lg:w-5/12 bg-zinc-800 flex justify-center items-center">
        <Register />
      </div>
    </div>
  );
}

export default register;
