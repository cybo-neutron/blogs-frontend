import React from "react";
import ReactMarkdown from "react-markdown";
// import style from "./markdown.module.css";
interface blogProps {
  title: string;
  description: string;
}

function BlogPreview(props: any) {
  const { title, description, image } = props;
  return (
    <div className="prose lg:prose-xl min-w-full mt-2">
      <h1 className="text-5xl font-extrabold mb-1 text-center">{title}</h1>
      <div className=" w-full flex justify-center">
        <img src={image || "/scenery1.jpg"} alt="" className="min-w-full" />
      </div>
      <ReactMarkdown className="markdown">{description}</ReactMarkdown>
    </div>
  );
}

export default BlogPreview;
