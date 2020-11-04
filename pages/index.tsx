import R from "ramda";

//components
import Nav from "../components/nav";
import { Title } from "../components/title";
import { BlogPosts } from "../components/index__blogPosts";
import { Header } from "../components/header";
import { BackgroundImage } from "../components/backgroundImage";

import { fetcher } from "../fetcher";

const Home = ({ blogPosts }: any) => (
  <div className="relative h-screen v-screen">
    <Nav />
    <BackgroundImage />
    <main className="content-container">
      <Title
        color="white"
        title="Dennis Stassen"
        subtitle="Enthousiast Econoom & Leergierige Leraar"
      />
      <>
        <Header />
        <BlogPosts blogPosts={blogPosts} />
      </>
    </main>
  </div>
);

export default Home;

export async function getStaticProps() {
  const data = await fetcher([process.env.API_URL, "posts"]);

  const first3Data = R.slice(0, 3, data.data);

  return { props: { blogPosts: first3Data } };
}
