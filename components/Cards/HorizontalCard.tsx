import axios from "axios";
import Router, { useRouter } from "next/router";
import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import ReactMarkdown from "react-markdown";
import style from "./HorizontalCard.module.css";

import { useSelector, useDispatch } from "react-redux";
import blogService from "../../services/blogService";

const HorizontalCard = (props: any) => {
  const { tags, id } = props;
  const router = useRouter();

  const { user } = useSelector((state) => state.auth);

  async function handleDelete(event: React.MouseEvent) {
    event.preventDefault();
    const confirmDelete = window.confirm("Are you sure you want to delete it?");

    if (confirmDelete) {
      const response = await blogService.deleteBlog(user.token, id);
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
  // console.log(props.isPublic);

  return (
    <div
      className="flex overflow-hidden bg-transparent my-2 rounded-md cursor-pointer shadow-xl w-full"
      // key={props.id}
    >
      {/* Image */}
      <div className=" my-auto max-w-[250px] min-w-[200px] max-h-[200px] overflow-hidden hidden sm:flex ">
        <img
          src={props.image || "scenery1.jpg"}
          alt=""
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col py-2 mx-2 w-full relative">
        <p className="text-sm text-zinc-500">
          {props.author || props?.authorUserId || "Anonymous"}
        </p>
        <p className="absolute top-0 right-0 bg-orange-500 px-2 rounded-b-2xl">
          {props.isPublic !== "undefined" &&
            props.isPublic === false &&
            "Draft"}
        </p>
        <h2 className="text-xl font-bold">{props.title || "No title"}</h2>

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

        {/* Tags */}
        {/* <div className="flex flex-row mt-auto space-x-2">
          {tags.map((elem) => {
            return (
              <p className="bg-zinc-700 px-2 rounded-full text-sm" key={elem}>
                #{elem}
              </p>
            );
          })}
        </div> */}

        {/* //todo : Show these two buttons only if the user viewing this is also the author of the blog */}
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
    </div>
  );
};

export default HorizontalCard;
