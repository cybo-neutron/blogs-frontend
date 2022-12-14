import React, { useState } from "react";
import Head from "next/head";

import { EyeSlashIcon, EyeIcon, UserIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { register } from "../../states/user.slice";
import store from "../../store";

function Register() {
  const { loggedIn, user } = useSelector((state: any) => state.auth);
  const dispatch = useDispatch<typeof store.dispatch>();

  const [showPassword, setShowPassword] = useState(false);
  function togglePassword() {
    setShowPassword((prev) => !prev);
  }

  const [userData, setUserData] = useState({
    name: "John Doe",
    email: "johndoe@email.com",
    password: "password",
    password2: "password",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setUserData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function onSubmit(e: React.MouseEvent) {
    e.preventDefault();
    dispatch(
      register({
        name: userData.name,
        email: userData.email,
        password: userData.password,
      })
    );
  }

  return (
    <div className="w-full h-4/5 px-2 flex flex-col justify-center items-center text-zinc-300 ">
      <Head>
        <title>Register</title>
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
          <label className="text-[0.8em] text-zinc-400">Full Name</label>
          <input
            type="text"
            name="name"
            className="bg-transparent border-b-[1px] border-zinc-500 text-zinc-300 outline-none "
            defaultValue={userData.name}
            onChange={handleChange}
          />
        </div>

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

        <div className="w-full flex flex-col relative mt-2">
          <p className="text-[0.8em] text-zinc-400">Confirm Password</p>
          <input
            type={showPassword ? "text" : "password"}
            name="password2"
            className="bg-transparent border-b-[1px] border-zinc-500 text-zinc-300 outline-none"
            defaultValue={userData.password2}
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

        <button
          className="bg-zinc-200 text-zinc-900 rounded-full py-1 hover:bg-zinc-300 w-1/2 self-center mt-4"
          onClick={onSubmit}
        >
          Sign up
        </button>
      </form>

      <hr className="w-3/5 mt-auto border-zinc-500" />
      <div className="mt-2 text-sm">
        Already have an account ? {"  "}
        <Link href="/user/login">
          <a className="text-zinc-200 border-b-2 border-zinc-400 cursor-pointer ">
            Login
          </a>
        </Link>{" "}
      </div>
    </div>
  );
}

export default Register;
