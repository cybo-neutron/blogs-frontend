import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import HorizontalCard from "../components/Cards/HorizontalCard";
import { useQuery } from "react-query";
import axios from "axios";
import LoadingBar from "../components/misc/LoadingBar";
import Link from "next/link";

import dynamic from "next/dynamic";
import blogService from "../services/blogService";
import VerticalCard from "../components/Cards/VerticalCard";
const Layout = dynamic(() => import("../components/Layout"), { ssr: false });

const Home: NextPage = (props) => {
  async function fetchAllPublicPosts() {
    const response = await blogService.fetchAllPublicBlogs();

    return response.data;
  }

  const { isLoading, data, status, isError } = useQuery(
    ["allPublicPost"],
    fetchAllPublicPosts
  );

  if (isLoading) {
    return <LoadingBar />;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <div>
      <Head>
        <title>DBlog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 w-full mb-10">
          {data.map((elem: any) => {
            return (
              <Link
                href={{
                  pathname: `/blogs/${elem._id}`,
                }}
                passHref
                key={elem._id}
              >
                <a key={elem._id}>
                  <VerticalCard
                    key={elem._id}
                    id={elem._id}
                    author={elem.author}
                    title={elem.title}
                    tags={elem.tags}
                    description={elem.description}
                    authorUserId={elem.user_id}
                    image={elem.image}
                  />
                </a>
              </Link>
            );
          })}
        </div>
      </Layout>
    </div>
  );
};

export default Home;
