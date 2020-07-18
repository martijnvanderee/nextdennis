import { apiURL } from "../../variables";
import { fetcher } from "../../fetcher";

const BlogPost = (props) => {
  return (
    <div>
      <h1>Post: {props.title}</h1>
      <h1>Comment: </h1>
    </div>
  );
};

export async function getStaticPaths() {
  const posts = await fetcher(apiURL, "api1");

  const paths = posts.data.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return { paths, fallback: false };
}

// params will contain the id for each generated page.
export async function getStaticProps({ params }) {
  const post = await fetcher(apiURL, "api", params.id);
  return {
    props: {
      title: post.data.Title,
    },
  };
}

export default BlogPost;
