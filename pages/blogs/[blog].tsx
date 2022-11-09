import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import React from "react";
import NavBar from "../../components/NavBar";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import BlogPreview from "../../components/BlogPreview";

import dynamic from "next/dynamic";
import blogService from "../../services/blogService";
const Layout = dynamic(() => import("../../components/Layout"), { ssr: false });

function Blog(props: any) {
  const [blogData, setBlogData] = useState({
    title: "",
    description: "",
    author: "",
    tags: [],
    image: "",
  });

  const router = useRouter();

  useEffect(() => {
    const id: string = router.query.blog;
    if (id) {
      (async () => {
        const res = await blogService.fetchBlog(id);
        const data = res.data;
        setBlogData((prev) => ({
          ...prev,
          title: data.title,
          description: data.description,
          author: data.author,
          tags: data.tags,
          image: data.image,
        }));
      })();
    }
  }, [router.query.blog]);

  return (
    <>
      <Layout>
        <div className=" p-5 bg-slate-400 w-10/12 self-center">
          <BlogPreview
            title={blogData.title}
            description={blogData.description}
            image={blogData.image}
          />
        </div>
      </Layout>
    </>
  );
}

export default Blog;
