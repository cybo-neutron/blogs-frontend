import React, { useEffect, useState } from "react";
import axios from "axios";
import Router, { useRouter } from "next/router";
import BlogPreview from "../BlogPreview";
import blogService from "../../services/blogService";

function CreatePost(props: any) {
  const router = useRouter();
  const initialValue = props.initialValue;
  const [blogDetails, setBlogDetails] = useState({
    title: initialValue?.title && "",
    tags: [""],
    description: "",
    user_id: "",
    isPublic: false,
    image: "",
  });

  const [canPublish, setCanPublish] = useState(false);
  const [token, setToken] = useState("");

  const [preview, setPreview] = useState(false);

  //todo : Implement display tags
  // function displayTags() {
  //   let tags = ["programming", "game", "unity", "javascript"];
  //   return tags.map((elem) => {
  //     <h2>{elem}</h2>;
  //   });
  // }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setBlogDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  useEffect(() => {
    let user = localStorage.getItem("user");
    if (!user) {
      Router.push("/");
    }
    //* Populate the user_id and token
    if (user) {
      const data = JSON.parse(user);
      setToken(data.token);
      setBlogDetails((prev) => ({ ...prev, user_id: data.user_id }));
    }
  }, []);

  async function onPublish() {
    setBlogDetails((prev) => {
      return { ...prev, isPublic: true };
    });

    setCanPublish((prev) => (prev = true));
  }
  //* This hanldes the publish event.  Once the can publish state is turned to true this useEffect is triggered
  useEffect(() => {
    if (canPublish) {
      blogService.createBlog(token, blogDetails, blogDetails.user_id);
    }
  }, [canPublish]);

  async function onSaveDraft() {
    blogService.createBlog(token, blogDetails, blogDetails.user_id);
  }

  function togglePreview() {
    setPreview((prev) => !prev);
  }

  return (
    <div className="flex flex-col mx-4 mt-3 rounded-md p-4 bg-zinc-700 bg-opacity-20 mb-10 w-full self-center">
      <button
        onClick={togglePreview}
        className="self-end text-xl hover:shadow-xl > bg-zinc-700 px-4 rounded-md "
      >
        {preview ? "Edit" : "Preview"}
      </button>

      {!preview && (
        <div className="flex flex-col gap-y-3">
          <input
            type="text"
            name="title"
            className="bg-transparent border-0 outline-none w-full text-3xl font-bold"
            placeholder="New post title..."
            onChange={handleChange}
            value={blogDetails.title}
          />

          <input
            type="text"
            name="image"
            className="bg-transparent border-0 outline-none font-light"
            placeholder="Mention the link of the image for cover..."
            onChange={handleChange}
            value={blogDetails.image}
          />

          {/* <input
        type="text"
        name="tags"
        className="bg-transparent border-0 outline-none font-light"
        placeholder="Mention the tags here..."
        onBlur={(e) => {
          setBlogDetails((prev) => ({ ...prev, tags: [e.target.value] }));
        }}
      /> */}
          {/* {displayTags()} */}
          <textarea
            name="description"
            className="outline-none h-[400px] bg-zinc-600 bg-opacity-5 py-1 resize-none"
            placeholder="Enter the contents of your blog here..."
            onChange={handleChange}
            value={blogDetails.description}
          />
        </div>
      )}

      {/* Preview  */}
      {preview && (
        <div>
          <div className="font-bold text-3xl text-center text-orange-300">
            Preview
          </div>

          <BlogPreview
            title={blogDetails.title}
            description={blogDetails.description}
            image={blogDetails.image}
          />
        </div>
      )}

      {/* Buttons  */}
      <div className="mt-5">
        <button
          className="bg-orange-600 px-3 py-1 rounded-full font-bold"
          onClick={onPublish}
        >
          Publish
        </button>
        <button
          className="text-orange-400  ml-2 px-3 py-1 rounded-full hover:shadow-xl"
          onClick={onSaveDraft}
        >
          Save Draft
        </button>
      </div>

      {/* <hr /> */}
    </div>
  );
}

export default CreatePost;
