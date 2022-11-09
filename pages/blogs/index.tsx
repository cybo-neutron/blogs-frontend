import React, { useEffect, useState } from "react";
import { GetStaticProps } from "next";
import Link from "next/link";
import HorizontalCard from "../../components/Cards/HorizontalCard";
import NavBar from "../../components/NavBar";
import UpdateBlog from "../../components/UpdateBlog";

import dynamic from "next/dynamic";
import blogService from "../../services/blogService";
import LoadingBar from "../../components/misc/LoadingBar";
const Layout = dynamic(() => import("../../components/Layout"), { ssr: false });

export default function Blogs(props: any) {
  const [showEditModal, setShowEditModal] = useState(false);
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    (async () => {
      const user = localStorage.getItem("user");
      if (user) {
        // console.log("🚀 ~ file: index.tsx ~ line 19 ~ user", JSON.parse(user));
        const jsonUser = JSON.parse(user);
        const allBlogs = await blogService.fetchAllBlogsOfUser(
          jsonUser.token,
          jsonUser.user_id
        );
        console.log("🚀 ~ file: index.tsx ~ line 26 ~ allBlogs", allBlogs.data);

        setBlogs(allBlogs.data);
      }
    })();
  }, []);

  return (
    <>
      {/* <NavBar /> */}
      <Layout>
        {blogs.length > 0 || <LoadingBar />}
        {blogs.length > 0 &&
          blogs.map((elem: any) => {
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
                    authorUserId={elem.user_id}
                    isPublic={elem.isPublic}
                    image={elem.image}
                  />
                </a>
              </Link>
            );
          })}
      </Layout>
    </>
  );
}
