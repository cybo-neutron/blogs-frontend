import React from "react";

function VerticalCard(props) {
  return (
    <div
      className="bg-zinc-800 shadow-md shadow-black"
      style={{ ...props?.style }}
    >
      <a
        className="relative group block overflow-hidden rounded-lg shadow-sm shadow-zinc-900/40 hover:bg-zinc-900 "
        href="#"
      >
        <img className="object-cover w-full h-56" src={"scenery1.jpg"} alt="" />
        <div className="w-full h-56 bg-gradient-to-t from-transparent to-zinc-800 opacity-50 group-hover:opacity-0 top-0 absolute"></div>
        <div className="p-2">
          <h5 className="text-xl font-bold line-clamp-2">
            {props.title || "What the title"}
          </h5>

          <p className="mt-1 text-sm line-clamp-2">
            {props.description || "lorem30 fhslkfsdkhfsk fsdkhfkls fj"}
          </p>

          <p className="mt-2 text-sm text-lime-400">
            By {props.author || "Anonymous"}
          </p>

          <p className="text-[0.75em] text-gray-500">
            {new Date(Date.now()).toLocaleDateString("hi-IN")}
          </p>

          <div className="inline-block pb-1 mt-1 font-medium text-lime-400 border-b border-lime-400 ">
            Find out more
            <span aria-hidden="true">&rarr;</span>
          </div>
        </div>
      </a>
    </div>
  );
}

export default VerticalCard;
