import axios from "axios";
import Router, { useRouter } from "next/router";
import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import ReactMarkdown from "react-markdown";
import style from "./HorizontalCard.module.css";

import { useSelector, useDispatch } from "react-redux";
import blogService from "../../services/blogService";
import Link from "next/link";

function VerticalCard(props: any) {
  const { tags, id } = props;
  const router = useRouter();

  const { user } = useSelector((state: any) => state.auth);

  async function handleDelete(event: React.MouseEvent) {
    event.preventDefault();
    const confirmDelete = window.confirm("Are you sure you want to delete it?");

    if (confirmDelete) {
      const response = await blogService.deleteBlog(user.token, id);
      console.log(response);
      router.push("/");
    }
  }

  async function handleEdit(event: React.MouseEvent) {
    event.preventDefault();
    router.push({
      pathname: "/blogs/edit",
      query: {
        id,
      },
    });
  }

  return (
    <div
      className="bg-zinc-800 shadow-md shadow-black"
      style={{ ...props?.style }}
    >
      <a
        className="relative group block overflow-hidden rounded-lg shadow-sm shadow-zinc-900/40 hover:bg-zinc-900 "
        href="#"
      >
        <img
          className="object-cover w-full h-56"
          src={props.image || "scenery1.jpg"}
          alt="Blog Image"
        />
        <p className="absolute top-0 right-0 bg-orange-500 px-2 rounded-b-2xl">
          {props.isPublic !== "undefined" &&
            props.isPublic === false &&
            "Draft"}
        </p>
        <div className="w-full h-56 bg-gradient-to-t from-transparent to-zinc-800 opacity-50 group-hover:opacity-0 top-0 absolute"></div>
        <div className="p-2">
          <h5 className="text-xl font-bold line-clamp-2">
            {props.title || "What the title"}
          </h5>

          {/* Description  */}
          <article className={style.reactMarkDown}>
            <ReactMarkdown
              className={
                // style.reactMarkDown
                `text-sm text-zinc-300 mt-2 line-clamp-3 w-full`
              }
            >
              {props.description || "No description"}
            </ReactMarkdown>
          </article>

          <p className="mt-2 text-sm text-lime-400">
            By {props.author || "Anonymous"}
          </p>

          {/* <p className="text-[0.75em] text-gray-500">
            {new Date(Date.now()).toLocaleDateString("hi-IN")}
          </p> */}

          <div className="inline-block pb-1 mt-1 font-medium text-lime-400 border-b border-lime-400 ">
            Find out more
            <span aria-hidden="true">&rarr;</span>
          </div>

          {/* Delete and Edit button  */}
          {user && (
            <div className="flex gap-x-2 mt-auto">
              <div className="w-fit mt-2" onClick={handleDelete}>
                <AiOutlineDelete className="text-xl" />
              </div>
              <div className="w-fit mt-2" onClick={handleEdit}>
                <FiEdit className="text-xl" />
              </div>
            </div>
          )}
        </div>
      </a>
    </div>
  );
}

export default VerticalCard;
