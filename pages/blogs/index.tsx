import { GetStaticProps } from "next";
import Link from "next/link";
import HorizontalCard from "../../components/Cards/HorizontalCard";
import NavBar from "../../components/NavBar";

export default function Blogs(props: any) {
  return (
    <>
      <NavBar />

      {props.data.map((elem) => {
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

            {/* hello */}
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
