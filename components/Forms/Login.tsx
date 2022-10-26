import React, { useState } from "react";

import { EyeSlashIcon, EyeIcon, UserIcon } from "@heroicons/react/24/solid";

function Login(props) {
  const [showPassword, setShowPassword] = useState(false);
  function togglePassword() {
    setShowPassword((prev) => !prev);
  }

  return (
    <div className="w-full h-4/5 px-2 flex flex-col justify-center items-center text-zinc-300 ">
      <div className="text-3xl font-extrabold text-zinc-200">
        <UserIcon className="h-12" />
      </div>
      <p className="text-zinc-300 font-semibold mt-10 text-lg">
        Welcome to company
      </p>
      <form action="" className="flex flex-col gap-y-2 w-4/5 mt-6">
        <div className="w-full flex flex-col">
          <label className="text-[0.8em] text-zinc-400">Email</label>
          <input
            type="text"
            name="email"
            className="bg-transparent border-b-[1px] border-zinc-500 text-zinc-300 outline-none "
            defaultValue={"johndoe@email.com"}
          />
        </div>

        <div className="w-full flex flex-col relative mt-2">
          <p className="text-[0.8em] text-zinc-400">Password</p>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            className="bg-transparent border-b-[1px] border-zinc-500 text-zinc-300 outline-none"
            defaultValue={"password"}
          />
          <div
            onClick={togglePassword}
            className="cursor-pointer absolute right-0 bottom-1 "
          >
            {showPassword ? (
              <EyeSlashIcon className="h-5" />
            ) : (
              <EyeIcon className="h-5" />
            )}
          </div>
        </div>

        <a href="#" className="self-end text-zinc-400 mt-2 text-sm">
          Forgot Password?
        </a>

        <button className="bg-zinc-200 text-zinc-900 rounded-full py-1 hover:bg-zinc-300 w-1/2 self-center mt-4">
          Sign in
        </button>
      </form>

      <hr className="w-3/5 mt-auto border-zinc-500" />
      <div className="mt-2 text-sm">
        Don't Have an Account ? {"  "}
        <span
          className="text-zinc-200 border-b-2 border-zinc-400 cursor-pointer"
          onClick={props.toggleLoginRegister}
        >
          Create Account
        </span>{" "}
      </div>
    </div>
  );
}

export default Login;
