import React, { useState } from "react";
import Modal from "react-modal";

function UpdateBlog(props: any) {
  const [blogDetails, setBlogDetails] = useState({
    title: "",
    tags: [""],
    description: "",
    //todo : change user_id
    user_id: "12321321",
    isPublic: false,
  });

  const [canPublish, setCanPublish] = useState(false);

  function displayTags() {
    let tags = ["programming", "game", "unity", "javascript"];
    return tags.map((elem) => {
      <h2>{elem}</h2>;
    });
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setBlogDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function onUpdate() {
    setBlogDetails((prev) => {
      return { ...prev, isPublic: true };
    });
    setCanPublish((prev) => (prev = true));
  }
  return (
    <div>
      <Modal
        isOpen={true}
        style={{
          overlay: {
            background: "#0000006d",
          },
          content: {
            padding: "0",
            margin: "0",
            display: "flex",
            background: "transparent",
            border: "none",
          },
        }}
      >
        <div className="flex flex-col gap-y-3 w-full bg-zinc-500 px-2">
          <input
            type="text"
            name="title"
            className="bg-transparent border-0 outline-none w-full text-3xl font-bold"
            placeholder="New post title..."
            onChange={handleChange}
          />

          <input
            type="text"
            name="tags"
            className="bg-transparent border-0 outline-none font-light"
            placeholder="Mention the tags here..."
            onBlur={(e) => {
              setBlogDetails((prev) => ({ ...prev, tags: [e.target.value] }));
            }}
          />
          {/* {displayTags()} */}
          <textarea
            name="description"
            className="outline-none bg-zinc-800 bg-opacity-5 py-1 resize-none flex-grow"
            placeholder="Enter the contents of your blog here..."
            onChange={handleChange}
          />
          <div>
            <button
              className="bg-orange-500 px-3 py-1 rounded-full font-bold"
              onClick={onUpdate}
            >
              Update
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default UpdateBlog;
