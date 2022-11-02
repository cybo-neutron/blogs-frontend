import React from "react";
import { AiOutlineDelete } from "react-icons/ai";

const HorizontalCard = (props: any) => {
  const { tags, id } = props;

  async function handleDelete(event: React.MouseEvent) {
    event.preventDefault();
    const response = await fetch(`http://localhost:5000/api/posts/${id}`, {
      method: "DELETE",
    });
    const json = await response.json();
    console.log(json);
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

        <p className="text-sm text-zinc-300 mt-2 line-clamp-2 sm:line-clamp-3">
          {props.description || "No description"}
        </p>
        <div className="flex flex-row mt-auto space-x-2">
          {tags.map((elem) => {
            return (
              <p className="bg-zinc-700 px-2 rounded-full text-sm">#{elem}</p>
            );
          })}
        </div>
        <div className="w-fit mt-2" onClick={handleDelete}>
          <AiOutlineDelete className="text-xl" />
        </div>
      </div>
    </div>
  );
};

export default HorizontalCard;
