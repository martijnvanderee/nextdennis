import ReactMarkdown from "react-markdown";
import { fetcher } from "../../fetcher";

import Nav from "../../components/nav";

const BlogPost = (props:any) => {

  return (
    <div className="relative">
      <div className="overlay-background-image bg-blue-100 opacity-25" />

      <Nav />

      <div className="content-container pt-32">
        <h1 className="text-2xl text-headerColor">{props.title}</h1>
        <p className="text-base text-fontColor">
        <ReactMarkdown source={props.content} />
        </p>
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  const posts = await fetcher([process.env.API_URL, "posts"]);

  const paths = posts.data.map((post: any) => ({
    params: { blogPost: post.id.toString() },
  }));

  return { paths, fallback: false };
}

// params will contain the id for each generated page.
export async function getStaticProps({ params }: any) {
  const post = await fetcher([process.env.API_URL, "post", params.blogPost]);
  return {
    props: {
      title: post.data.Title,
      content: post.data.Content,
    },
  };
}

export default BlogPost;
