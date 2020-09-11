import R from "ramda";

//components
import Nav from "../components/nav";
import { Title } from "../components/title";
import { BlogPosts } from "../components/blogPosts";
import { Header } from "../components/header";

import { fetcher } from "../fetcher";

const Home = ({ blogPosts }) => {
  return (
    <div className="relative h-screen v-screen">
      <Nav />
      <BackgroundImage />
      <main className="content-container">
        <Title
          color="white"
          title="Dennis Stassen"
          subtitle="Onderwijsenthousiasteling"
        />
        <div>
          <Header />
          <BlogPosts blogPosts={blogPosts} />
        </div>
      </main>
    </div>
  );
};

export default Home;

const BackgroundImage = () => {
  const imagePath = "dennis_voor_de_klas.jpeg";

  return (
    <div className="fixed w-full h-full top-0 right-0 z-0">
      <div className="absolute object-contain opacity-50 h-full w-full bg-color3 z-10" />
      <div className="relative w-full h-full">
        <img
          className="absolute object-cover h-full w-full"
          alt="Dennis stassen voor de klas"
          src={require(`images/${imagePath}?trace`).trace}
        />
        <img
          className="absolute object-cover h-full w-full"
          alt="Dennis stassen voor de klas"
          src={require(`images/${imagePath}?webp`)}
        />
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const data = await fetcher([process.env.API_URL, "posts"]);

  const first3Data = R.slice(0, 3, data.data);

  return { props: { blogPosts: first3Data } };
}
