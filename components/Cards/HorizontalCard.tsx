import React from "react";

function HorizontalCard() {
  const tags = ["entertainment", "gaming", "travel", "adventure", "technology"];
  return (
    <div className="flex  overflow-hidden bg-zinc-800 my-2 rounded-md mx-2">
      {/* Image */}
      <div className=" my-auto max-w-[300px] min-w-[200px] max-h-[200px] overflow-hidden ">
        <img src="scenery2.jpg" alt="" className="" />
      </div>
      {/* Content */}
      <div className="flex flex-col py-2 mx-2">
        <p className="text-sm text-zinc-500">Author</p>

        <h2 className="text-xl font-bold">Title</h2>

        <p className="text-sm text-zinc-300 mt-2 line-clamp-2 sm:line-clamp-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel
          voluptatum magni at, possimus commodi nam quia accusantium eum id
          asperiores porro voluptates necessitatibus dolores nihil facere ab cum
          eius dignissimos odit nesciunt, odio dolorum! Voluptatum at
          reprehenderit in rerum nulla!
        </p>
        <div className="flex flex-row mt-auto space-x-2">
          {tags.map((elem) => {
            return (
              <p className="bg-zinc-700 px-2 rounded-full text-sm">#{elem}</p>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default HorizontalCard;
