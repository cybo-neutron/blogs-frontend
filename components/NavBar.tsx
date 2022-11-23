import Link from "next/link";
import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../states/user.slice";
import Router from "next/router";
import store from "../store";

function NavBar() {
  const { loggedIn, user } = useSelector((state: any) => state.auth);
  const dispatch = useDispatch<typeof store.dispatch>();

  const [menuOpen, setmenuOpen] = useState(false);
  function toggleMenu() {
    setmenuOpen((prev) => !prev);
  }

  function onLogout() {
    dispatch(logout());
    Router.push("/");
  }

  return (
    <div className="flex flex-col sm:flex-row justify-between px-2 py-2 shadow-md bg-transparent">
      <div className="font-bold flex justify-between">
        <div>
          <Link href="/">
            <div className="text-orange-500 cursor-pointer">DBlog</div>
          </Link>
        </div>
        <div className="visible sm:hidden cursor-pointer" onClick={toggleMenu}>
          {menuOpen ? (
            <XMarkIcon className="h-5 " />
          ) : (
            <Bars3Icon className="h-5 " />
          )}
        </div>
      </div>

      <div
        className={`uppercase font-bold 
                    ${menuOpen ? "flex" : "sm:flex hidden"}
                    flex-col space-y-2 space-x-0 justify-center items-center
                    sm:flex-row sm:space-y-0 sm:space-x-2 `}
      >
        {user ? (
          <>
            <Link href="/blogs" className="">
              my blogs
            </Link>
            <button className="bg-orange-500 font-semibold px-2  rounded-sm mx-2 my-4">
              <Link href="/blogs/create">Compose new Blog</Link>
            </button>

            <button
              className="bg-red-500 px-2 rounded-sm shadow-sm"
              onClick={onLogout}
            >
              Logout
            </button>
          </>
        ) : (
          <Link href="/user/login">
            <button className="bg-orange-400 px-3 rounded-md shadow-lg">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default NavBar;
