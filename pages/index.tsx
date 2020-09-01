import Link from "next/link";

//components
import Nav from "../components/nav";
import { Title } from "../components/title";

const Home = () => {
  return (
    <div className="relative h-screen v-screen">
      <Nav />
      <BackgroundImage />

      <div className="content-container">
        <Title
          color="white"
          title="Dennis Stassen"
          subtitle="Onderwijsenthousiasteling"
        />
        <Content />
      </div>
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
          src={imagePath}
        />
      </div>
    </div>
  );
};

const Content = () => {
  const path = "dennisCloseup.jpg";

  return (
    <div>
      <div className="relative flex p-6 mt-16 rounded mb-16">
        <div className="absolute w-full h-full inset-0 opacity-75 rounded bg-color3" />
        <img
          className="relative opacity-0 hidden h-64 w-auto my-auto mr-8 rounded  md:opacity-100 md:block"
          src={path}
        />
        <ContentText />
      </div>
      <BlogPosts />
    </div>
  );
};

const BlogPosts = () => {
  return (
    <div className="relative">
      <h2 className="text-white text-2xl md:text-4xl">
        Lees even mijn laatste blog posts!{" "}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto ">
        <BlogPost />
        <BlogPost />
        <BlogPost />
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

const ContentText = () => (
  <div className="relative">
    <p className="text-white text-lg">
      Hey ik ben Dennis Stassen, een eerste graads economie docent op het
      Minkema college in Woerden. Leuk dat je een kijkje neemt op mijn site.
    </p>

    <p className="inline-block my-2 text-lg text-white">
      Leerlingen hangen achterover, hebben slechte reflectie en maken te weinig
      stappen vooruit?
    </p>
    <p className="inline-block my-2 text-lg text-white">
      Krijg werkvormen, inspiratie en ideeën om ze te activeren op basis van wat
      echt werkt volgens onderwijsonderzoek!
    </p>

    <div>
      <Link href="/aanbod" passHref>
        <a>
          <span className="border-solid border-b border-color1 text-lg text-white">
            Lees wat ik doe{" "}
          </span>
        </a>
      </Link>

      <p className="text-white inline-block my-2 text-lg">of</p>

      <Link href="/contact" passHref>
        <a>
          <span className="border-solid border-b border-color1 text-lg text-white">
            {" "}
            neem contact met mij op!
          </span>
        </a>
      </Link>
    </div>
  </div>
);
