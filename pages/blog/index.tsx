import Nav from "../../components/nav";
import { Title } from "../../components/title";

import Link from "next/link";

import { fetcher } from "../../fetcher";

import { formatDate } from "../../helpers";

type Props = {
  blogPosts: any[];
};

const Blog: React.FunctionComponent<Props> = ({ blogPosts }) => {
  const path1 = "dennisCloseup.jpg";
  const path = "dennis_voor_de_klas.jpeg";

  return (
    <div className="relative">
      <div className="overlay-background-image bg-blue-100 opacity-25" />
      <Nav />

      <div className="content-container">
        <Title
          color="#013f5d"
          title="Blog"
          subtitle="artikelen en willekeurige hersenspinsels van mij over de huidige economie"
        />

        <div className="grid md:grid-cols-3 gap-4 max-w-6xl mx-auto ">
          {blogPosts.map((blogPost) => {
            const newDate = formatDate(blogPost.created_at);
            return <BlogPost blogPost={blogPost} />;
          })}
        </div>
      </div>
    </div>
  );
};

const BlogPost = ({ blogPost }) => {
  const path = "dennisCloseup.jpg";

  return (
    <Link href="/blog/[id]" as={`/blog/${blogPost.id}`}>
      <a className="flex md:block bg-white hover:bg-gray-200 cursor-pointer rounded h-32 md:h-auto shadow-offset">
        <div className="object-cover h-full md:h-64 w-32 md:w-full flex-none">
          <img className="object-cover h-full w-full" src={path} />
        </div>

        <div className="relative p-2 h-full md:h-32 overflow-visible flex-auto ">
          <h2 className="text-lg md:text-xl font-semibold leading-tight">
            {blogPost.Title}
          </h2>
          <div className="absolute bottom-0 text-xs mb-2">
            {" "}
            {formatDate(blogPost.updated_at)[0]}
          </div>
        </div>
      </a>
    </Link>
  );
};

export async function getStaticProps() {
  const data = await fetcher([process.env.API_URL, "posts"]);

  return { props: { blogPosts: data.data } };
}

export default Blog;
