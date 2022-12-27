import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useQuery, QueryFunctionContext } from "react-query";
import Layout from "../../components/Layout";
import LoadingBar from "../../components/misc/LoadingBar";
import blogService from "../../services/blogService";

function Edit() {
  const router = useRouter();

  const [blogId, setBlogId] = useState("");
  const [blogData, setBlogData] = useState({
    title: "",
    description: "",
    userId: "",
    tags: [],
    isPublic: false,
    image: "",
  });
  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setBlogData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function fetchPost({
    queryKey,
  }: QueryFunctionContext<[string, string]>) {
    const response = await blogService.fetchBlog(queryKey[1]);
    const { title, description, isPublic, tags, image } = response.data;
    setBlogData((prev) => ({
      ...prev,
      title,
      description,
      isPublic,
      tags,
      image,
    }));
    return response.data;
  }

  async function updatePost() {
    const user = localStorage.getItem("user");
    if (user) {
      const json = JSON.parse(user);
      const response = await blogService.updateBlog(
        json.token,
        blogId,
        blogData
      );

      router.push("/blogs");
    }
  }

  function deletePost() {
    console.log("Deleting post");
  }

  useEffect(() => {
    if (router.isReady) {
      const id = router.query.id as string;
      setBlogId(id);
    }
  }, [router.isReady]);

  const { isLoading, data } = useQuery(["fetchBlog", blogId], fetchPost);

  if (isLoading) {
    return <LoadingBar />;
  }

  return (
    <Layout>
      <div className="flex flex-col gap-y-3 mt-3 rounded-md p-4 bg-zinc-700 bg-opacity-20 ">
        <input
          type="text"
          name="title"
          className="bg-transparent border-0 outline-none w-full text-3xl font-bold"
          placeholder="New post title..."
          defaultValue={data.title}
          onChange={handleChange}
        />
        <input
          type="text"
          name="image"
          className="bg-transparent border-0 outline-none w-full text-md"
          placeholder="Insert your image link here.."
          defaultValue={data.image}
          onChange={handleChange}
        />
        <textarea
          name="description"
          className="outline-none h-[400px] bg-zinc-600 bg-opacity-5 py-1 resize-none"
          placeholder="Enter the contents of your blog here..."
          defaultValue={data.description}
          onChange={handleChange}
        />

        <div className="flex">
          <div className="form-check form-switch">
            <label
              className="form-check-label inline-block text-zinc-200"
              htmlFor="flexSwitchCheckDefault"
            >
              Public
            </label>
            <input
              className="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top  bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              defaultChecked={data.isPublic}
              onChange={() => {
                setBlogData((prev) => ({ ...prev, isPublic: !prev.isPublic }));
              }}
            />
          </div>
        </div>

        <div>
          <button
            className="bg-orange-500 px-3 py-1 rounded-full font-bold"
            onClick={updatePost}
          >
            Update
          </button>
          <button
            className="text-orange-400  ml-2 px-3 py-1 rounded-full"
            onClick={deletePost}
          >
            Delete
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default Edit;
