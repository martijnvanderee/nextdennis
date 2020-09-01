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
      <div className="overlay-background-image bg-blue-100 opacity-50" />
      <Nav />

      <div className="content-container">
        <Title
          color="#013f5d"
          title="Blog"
          subtitle="artikelen en willekeurige hersenspinsels van mij over de huidige economie"
        />

        <div className="grid grid-cols-2  md:grid-cols-3 gap-4 max-w-6xl mx-auto ">
          <BlogPost />
          <BlogPost /> <BlogPost /> <BlogPost /> <BlogPost /> <BlogPost />
          {blogPosts.map((blogPost) => {
            const newDate = formatDate(blogPost.created_at);

            return (
              <Link href="/blog/[id]" as={`/blog/${blogPost.id}`}>
                <a className="bg-white hover:bg-gray-200 cursor-pointer">
                  <img
                    className="object-cover w-full h-64 rounded-t-lg"
                    src={`https://denniscms.herokuapp.com${blogPost.HeaderImage.url}`}
                  />

                  <div className="p-2 h-48 overflow-visible">
                    <div className="text-xs mb-2"> {newDate}</div>
                    <h2 className="text-2xl font-semibold leading-tight">
                      {blogPost.Title}
                    </h2>
                  </div>
                </a>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const BlogPost = () => {
  const path = "dennisCloseup.jpg";
  return (
    <div className="flex md:block bg-white hover:bg-gray-200 cursor-pointers h-32  md:h-auto">
      <div className="object-cover h-full md:h-64 w-64 md:w-full">
        <img className="object-cover h-full w-full" src={path} />
      </div>

      <div className="relative p-2 h-full md:h-32 overflow-visible ">
        <h2 className="text-lg md:text-xl font-semibold leading-tight">
          Massaontslag bij Booking: 4000 medewerkers komen op straat te staan
        </h2>
        <div className="absolute bottom-0 text-xs mb-2">18-12-2011</div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const data = await fetcher([process.env.API_URL, "posts"]);

  return { props: { blogPosts: data.data } };
}

export default Blog;
