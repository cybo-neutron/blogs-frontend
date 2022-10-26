import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaGithub } from "react-icons/fa";

function ProfileCard() {
  return (
    <div className="px-2 w-[300px] bg-zinc-800 rounded-lg flex flex-col items-center py-2">
      <div className="rounded-full overflow-hidden mx-auto h-[200px] w-[200px]">
        <img
          src="faces/keanu.jpg"
          alt=""
          className="h-full w-full object-cover "
        />
      </div>
      <h2 className="text-2xl font-bold font mt-2">John Wick</h2>
      <p className="uppercase text-zinc-500">Designation</p>
      <p className="text-center font-light text-sm text-zinc-300">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur
        quidem dolore ea aut corporis, voluptatem ipsum fuga debitis vel harum?
      </p>
      <hr className="w-full my-2" />
      <div className="flex flex-row gap-x-2">
        <FaFacebookF />
        <FaTwitter />
        <FaYoutube />
        <FaGithub />
      </div>
    </div>
  );
}

export default ProfileCard;
