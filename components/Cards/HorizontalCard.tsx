import Router, { useRouter } from "next/router";
import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import ReactMarkdown from "react-markdown";
import style from "./HorizontalCard.module.css";

const HorizontalCard = (props: any) => {
  const { tags, id } = props;
  const router = useRouter();

  async function handleDelete(event: React.MouseEvent) {
    event.preventDefault();
    //todo : confirm dialog for delete
    const confirmDelete = window.confirm("Are you sure you want to delete it?");
    if (confirmDelete) {
      const response = await fetch(`http://localhost:5000/api/posts/${id}`, {
        method: "DELETE",
      });
      router.push("/blogs");
    }
  }

  async function handleEdit(event: React.MouseEvent) {
    event.preventDefault();
    console.log("Editting");
    router.push({
      pathname: "/blogs/edit",
      query: {
        id,
      },
    });
  }

  return (
    <div
      className="flex  overflow-hidden bg-zinc-800 my-2 rounded-md mx-2 cursor-pointer shadow-xl"
      // key={props.id}
    >
      {/* Image */}
      <div className=" my-auto max-w-[250px] min-w-[200px]  overflow-hidden hidden sm:flex ">
        <img src="scenery2.jpg" alt="" className="" />
      </div>
      {/* Content */}
      <div className="flex flex-col py-2 mx-2 ">
        <p className="text-sm text-zinc-500">{props.author || "Anonymous"}</p>

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
        <div className="flex flex-row mt-auto space-x-2">
          {tags.map((elem) => {
            return (
              <p className="bg-zinc-700 px-2 rounded-full text-sm" key={elem}>
                #{elem}
              </p>
            );
          })}
        </div>
        <div className="flex gap-x-2">
          <div className="w-fit mt-2" onClick={handleDelete}>
            <AiOutlineDelete className="text-xl" />
          </div>
          <div className="w-fit mt-2" onClick={handleEdit}>
            <FiEdit className="text-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalCard;
