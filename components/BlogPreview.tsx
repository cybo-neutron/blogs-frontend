import React from "react";
import ReactMarkdown from "react-markdown";

interface blogProps {
  title: string;
  description: string;
}

function BlogPreview(props) {
  const { title, description } = props;
  return (
    <div className="prose lg:prose-xl">
      <h1 className="text-5xl font-extrabold mb-3">{title}</h1>

      <ReactMarkdown>{description}</ReactMarkdown>
    </div>
  );
}

export default BlogPreview;
