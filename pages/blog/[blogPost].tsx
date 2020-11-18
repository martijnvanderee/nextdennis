import ReactMarkdown from "react-markdown";
import { fetcher } from "../../fetcher";

import Nav from "../../components/nav";


const MyImage = (props:any) => {
  return (
    <img
      className={"mx-auto max-h-h128"}
      alt={props.alt}
      src={props.src}

    />
  );
};


const BlogPost = (props:any) => {
  const renderers = {
    image: MyImage
  };

  return (
    <div className="relative">
      <div className="overlay-background-image bg-blue-100 opacity-25" />

      <Nav />

      <div className="content-container pt-32">
        <h1 className="text-4xl text-headerColor text-center">{props.title}</h1>
        <div className="text-base md:text-lg text-fontColor content-center">
        <ReactMarkdown source={props.content} renderers={renderers} />



        </div>
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
