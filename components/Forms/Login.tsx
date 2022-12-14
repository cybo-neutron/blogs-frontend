import React, { useState } from "react";
import { EyeSlashIcon, EyeIcon, UserIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Head from "next/head";
import { login } from "../../states/user.slice";
import { useSelector, useDispatch } from "react-redux";
import Router from "next/router";
import store from "../../store";

function Login(props: any) {
  const { loggedIn, user } = useSelector((state: any) => state.auth);
  const dispatch = useDispatch<typeof store.dispatch>();

  const [showPassword, setShowPassword] = useState(false);
  function togglePassword() {
    setShowPassword((prev) => !prev);
  }

  const [userData, setUserData] = useState({
    email: "johndoe@email.com",
    password: "password",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setUserData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function onSubmit(e: React.MouseEvent) {
    e.preventDefault();
    console.log("logging In");
    dispatch(login(userData));
  }

  return (
    <div className="w-full h-4/5 px-2 flex flex-col justify-center items-center text-zinc-300 ">
      <Head>
        <title>Login</title>
      </Head>
      <div className="text-3xl font-extrabold text-zinc-200">
        <UserIcon className="h-12" />
      </div>
      <p className="text-zinc-300 font-semibold mt-10 text-lg">
        Welcome to{" "}
        <span className="cursor-pointer text-xl font-extralight">
          D
          <span className="text-orange-500 font-extrabold drop-shadow-xl shadow-white">
            Blog
          </span>
        </span>
      </p>
      <form action="" className="flex flex-col gap-y-2 w-4/5 mt-6">
        <div className="w-full flex flex-col">
          <label className="text-[0.8em] text-zinc-400">Email</label>
          <input
            type="text"
            name="email"
            className="bg-transparent border-b-[1px] border-zinc-500 text-zinc-300 outline-none "
            defaultValue={userData.email}
            onChange={handleChange}
          />
        </div>

        <div className="w-full flex flex-col relative mt-2">
          <p className="text-[0.8em] text-zinc-400">Password</p>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            className="bg-transparent border-b-[1px] border-zinc-500 text-zinc-300 outline-none"
            defaultValue={userData.password}
            onChange={handleChange}
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

        <button
          className="bg-zinc-200 text-zinc-900 rounded-full py-1 hover:bg-zinc-300 w-1/2 self-center mt-4"
          onClick={onSubmit}
        >
          Sign in
        </button>
      </form>

      <hr className="w-3/5 mt-auto border-zinc-500" />
      <div className="mt-2 text-sm">
        Dont Have an Account ?
        <Link href="/user/register">
          <a className="text-zinc-200 border-zinc-400 cursor-pointer border-b-2">
            Create Account
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Login;
