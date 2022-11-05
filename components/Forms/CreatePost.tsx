import React, { useEffect, useState } from "react";
import axios from "axios";
import Router, { useRouter } from "next/router";
import BlogPreview from "../BlogPreview";

function CreatePost(props) {
  const router = useRouter();
  const initialValue = props.initialValue;
  const [blogDetails, setBlogDetails] = useState({
    title: initialValue?.title && "",
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

  function handleChange(e) {
    setBlogDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function onPublish() {
    // console.log(blogDetails);
    setBlogDetails((prev) => {
      return { ...prev, isPublic: true };
    });
    setCanPublish((prev) => (prev = true));
  }

  function saveBlog() {
    axios
      .post(`http://localhost:5000/api/posts`, blogDetails)
      .then((res) => {
        console.log(res.data);
        router.push("/blogs");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    if (canPublish) {
      saveBlog();
    }
  }, [canPublish]);

  async function onSaveDraft() {
    console.log("Saving draft");
    saveBlog();
  }

  return (
    <div className="flex flex-col gap-y-3 mx-4 mt-3 rounded-md p-2 bg-zinc-700 bg-opacity-20 ">
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
        className="outline-none h-[400px] bg-zinc-600 bg-opacity-5 py-1 resize-none"
        placeholder="Enter the contents of your blog here..."
        onChange={handleChange}
      />
      <div>
        <button
          className="bg-orange-500 px-3 py-1 rounded-full font-bold"
          onClick={onPublish}
        >
          Publish
        </button>
        <button
          className="text-orange-400  ml-2 px-3 py-1 rounded-full"
          onClick={onSaveDraft}
        >
          Save Draft
        </button>
      </div>
      <hr />
      <div className="font-bold text-xl text-center text-orange-300">
        Preview
      </div>
      <BlogPreview
        title={blogDetails.title}
        description={blogDetails.description}
      />
    </div>
  );
}

export default CreatePost;
