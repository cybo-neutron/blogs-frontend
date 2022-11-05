import React, { useState } from "react";
import { GetStaticProps } from "next";
import Link from "next/link";
import HorizontalCard from "../../components/Cards/HorizontalCard";
import NavBar from "../../components/NavBar";
import UpdateBlog from "../../components/UpdateBlog";

export default function Blogs(props: any) {
  const [showEditModal, setShowEditModal] = useState(false);

  return (
    <>
      <NavBar />
      <button className="bg-orange-400 font-semibold px-2 py-1 rounded-sm mx-2 my-4">
        <Link href="/blogs/create">Compose new Blog</Link>
      </button>
      {props.data.map((elem: any) => {
        return (
          <Link
            href={{
              pathname: `/blogs/${elem._id}`,
            }}
            passHref
            key={elem._id}
          >
            <a key={elem._id}>
              <HorizontalCard
                key={elem._id}
                id={elem._id}
                author={elem.author}
                title={elem.title}
                tags={elem.tags}
                description={elem.description}
              />
            </a>
          </Link>
        );
      })}
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch("http://localhost:5000/api/posts");
  let allBlogs = await res.json();

  //   console.log(allBlogs);
  return {
    revalidate: 10,
    props: {
      data: allBlogs,
    },
  };
};
