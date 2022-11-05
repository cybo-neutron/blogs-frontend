import Link from "next/link";
import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

function NavBar() {
  const [menuOpen, setmenuOpen] = useState(false);
  function toggleMenu() {
    setmenuOpen((prev) => !prev);
  }

  return (
    <div className="flex flex-col sm:flex-row justify-between px-2 py-2 shadow-md bg-transparent">
      <div className="font-bold flex justify-between">
        <div>
          <Link href="/blogs">Logo</Link>
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
        <Link href="/" className=" ">
          home
        </Link>

        <Link href="/blogs" className="">
          blogs
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
