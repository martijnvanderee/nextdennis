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
          <div className="">
            <div className="bg-white hover:bg-gray-200 cursor-pointer">
              <img
                className="object-cover w-full h-64 rounded-t-lg"
                src={require(`images/${path}?webp`)}
              />
              <div className="p-2 h-48 overflow-visible">
                <div className="text-xs mb-2">18-12-2011</div>
                <h2 className="text-2xl font-semibold leading-tight">
                  Massaontslag bij Booking: 4000 medewerkers komen op straat te
                  staan
                </h2>
              </div>
            </div>
          </div>
          <div className="bg-green-200">
            <div>
              <img
                className="object-cover w-full h-64"
                src={require(`images/${path1}?webp`)}
              />
              <div>date</div>
              <div>title</div>
              <div>subtitle</div>
            </div>
          </div>

          <div className="bg-white hover:bg-gray-200 cursor-pointer">
            <img
              className="object-cover w-full h-64 rounded-t-lg"
              src={require(`images/${path}?webp`)}
            />
            <div className="p-2 h-48 overflow-visible">
              <div className="text-xs mb-2">18-12-2011</div>
              <h2 className="text-2xl font-semibold leading-tight">
                Massaontslag bij Booking: 4000 medewerkers komen op straat te
                staan
              </h2>
            </div>
          </div>

          <div className="bg-white hover:bg-gray-200 cursor-pointer">
            <img
              className="object-cover w-full h-64 rounded-t-lg"
              src={require(`images/${path}?webp`)}
            />
            <div className="p-2 h-48 overflow-visible">
              <div className="text-xs mb-2">18-12-2011</div>
              <h2 className="text-2xl font-semibold leading-tight">
                Massaontslag bij Booking: 4000 medewerkers komen op straat te
                staan
              </h2>
            </div>
          </div>

          <div className="bg-white hover:bg-gray-200 cursor-pointer">
            <img
              className="object-cover w-full h-64 rounded-t-lg"
              src={require(`images/${path}?webp`)}
            />
            <div className="p-2 h-48 overflow-visible">
              <div className="text-xs mb-2">18-12-2011</div>
              <h2 className="text-2xl font-semibold leading-tight">
                Massaontslag bij Booking: 4000 medewerkers komen op straat te
                staan
              </h2>
            </div>
          </div>

          <div className="bg-white hover:bg-gray-200 cursor-pointer">
            <img
              className="object-cover w-full h-64 rounded-t-lg"
              src={require(`images/${path}?webp`)}
            />
            <div className="p-2 h-48 overflow-visible">
              <div className="text-xs mb-2">18-12-2011</div>
              <h2 className="text-2xl font-semibold leading-tight">
                Massaontslag bij Booking: 4000 medewerkers komen op straat te
                staan
              </h2>
            </div>
          </div>
          {blogPosts.map((blogPost) => {
            console.log(blogPost.HeaderImage);

            const newDate = formatDate(blogPost.created_at);
            console.log(newDate);
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

export async function getStaticProps() {
  const data = await fetcher([process.env.API_URL, "posts"]);

  return { props: { blogPosts: data.data } };
}

export default Blog;
