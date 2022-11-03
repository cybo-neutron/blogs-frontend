import React, { useState } from "react";
import Layout from "../../components/Layout";
import axios from "axios";
import Router, { useRouter } from "next/router";

function create() {
  const router = useRouter();
  const [blogDetails, setBlogDetails] = useState({
    title: "",
    tags: [""],
    description: "",
    user_id: "12321321",
    isPublic: true,
  });

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
    setBlogDetails((prev) => ({ ...prev, isPublic: true }));
    const data = JSON.stringify({ ...blogDetails });
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

  return (
    <Layout>
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
        {displayTags()}
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
          <button className="text-orange-400  ml-2 px-3 py-1 rounded-full">
            Save Draft
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default create;
