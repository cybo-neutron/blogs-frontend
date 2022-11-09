import React from "react";
import ReactMarkdown from "react-markdown";

interface blogProps {
  title: string;
  description: string;
}

function BlogPreview(props) {
  const { title, description, image } = props;
  return (
    <div className="prose lg:prose-xl min-w-full">
      <h1 className="text-5xl font-extrabold mb-3">{title}</h1>
      <div className=" w-full flex justify-center">
        <img src={image || "/scenery1.jpg"} alt="" className="max-h-[400px]" />
      </div>
      <ReactMarkdown>{description}</ReactMarkdown>
    </div>
  );
}

export default BlogPreview;
