import Nav from "../../components/nav";
import Link from "next/link";

import { fetcher } from "../../fetcher";

type Props = {
  blogPosts: any[];
};

const Blog: React.FunctionComponent<Props> = ({ blogPosts }) => {
  return (
    <div>
      <Nav />
      {blogPosts.map((blogPost) => (
        <Link href="/blog/[id]" as={`/blog/${blogPost.id}`}>
          <a>This is a blogpost</a>
        </Link>
      ))}
    </div>
  );
};

export async function getStaticProps() {
  const data = await fetcher(process.env.apiURL, "api1");

  return { props: { blogPosts: data.data } };
}

export default Blog;
