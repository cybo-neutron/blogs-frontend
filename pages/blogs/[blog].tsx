import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import React from "react";
import NavBar from "../../components/NavBar";
import { useEffect, useState } from "react";

function Blog(props) {
  const [blogData, setBlogData] = useState({
    title: "",
    description: "",
    author: "",
    tags: [],
  });

  const router = useRouter();

  useEffect(() => {
    const id = router.query.blog;
    console.log({ id });
    (async () => {
      const res = await fetch(`http://localhost:5000/api/posts/${id}`, {
        method: "GET",
      });
      const data = await res.json();
      setBlogData((prev) => ({
        ...prev,
        title: data.title,
        description: data.description,
        author: data.author,
        tags: data.tags,
      }));
    })();
  }, [router.query.blog]);

  return (
    <>
      <NavBar />
      <div className="p-5">
        <h1 className="text-3xl font-bold mb-3">{blogData.title}</h1>

        <p>{blogData.description}</p>
      </div>
    </>
  );
}

export default Blog;
