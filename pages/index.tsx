import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import HorizontalCard from "../components/Cards/HorizontalCard";
import ProfileCard from "../components/Cards/ProfileCard";
import HeroComp from "../components/HeroComp";
import NavBar from "../components/NavBar";
import styles from "../styles/Home.module.css";
import { useQuery } from "react-query";
import axios from "axios";
import LoadingBar from "../components/misc/LoadingBar";
import Link from "next/link";

import dynamic from "next/dynamic";
const Layout = dynamic(() => import("../components/Layout"), { ssr: false });

const Home: NextPage = (props) => {
  async function fetchAllPublicPosts() {
    const response = await axios.get(`http://localhost:5000/api/posts`);

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
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        {data.map((elem) => {
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
                  image={elem.image}
                />
              </a>
            </Link>
          );
        })}
      </Layout>
    </div>
  );
};

export default Home;
