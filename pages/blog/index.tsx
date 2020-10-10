import Nav from "../../components/nav";
import { Title } from "../../components/title";
import { BlogPost } from "../../components/blogPost";

import { fetcher } from "../../fetcher";

type Props = {
  blogPosts: any[];
};

const Blog: React.FunctionComponent<Props> = ({ blogPosts }) => {
  return (
    <div className="relative">
      <div className="overlay-background-image bg-blue-100 opacity-25" />
      <Nav />

      <div className="content-container">
        <Title
          color="#013f5d"
          title="Blog"
          subtitle="Lees hier over mijn zoektocht naar beter onderwijs"
        />

        {/* <div className="grid md:grid-cols-3 gap-4 max-w-6xl mx-auto ">
          {blogPosts.map((blogPost, index) => (
            <BlogPost blogPost={blogPost} key={index} />
          ))}
        </div> */}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const data = await fetcher([process.env.API_URL, "posts"]);

  return { props: { blogPosts: data.data } };
}

export default Blog;
