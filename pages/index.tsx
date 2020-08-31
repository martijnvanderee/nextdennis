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
          src={require(`images/${imagePath}?webp`)}
        />
      </div>
    </div>
  );
};

const Content = () => {
  const path = "dennisCloseup.jpg";

  return (
    <div>
      <div className="relative flex p-12 mt-16 rounded mb-16">
        <div className="absolute w-full h-full inset-0 opacity-75 rounded bg-color3" />
        <img
          className="z-10 opacity-0 hidden h-64 w-auto my-auto mr-8 rounded  md:opacity-100 md:block"
          src={require(`images/${path}?webp`)}
        />
        <ContentText />
      </div>
      <BlogPosts />
    </div>
  );
};

const BlogPosts = () => {
  const path = "dennis_voor_de_klas.jpeg";
  return (
    <div className="relative">
      <h2 className="text-white text-4xl">
        Lees even mijn laatste blog posts!{" "}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto ">
        <div className="">
          <div className="bg-white hover:bg-gray-200 rounded-t-lg cursor-pointers">
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
        <div className="bg-green-200 rounded-t-lg">
          <div>
            <img
              className="object-cover w-full h-64"
              src={require(`images/${path}?webp`)}
            />
            <div>date</div>
            <div>title</div>
            <div>subtitle</div>
          </div>
        </div>
        <div className="bg-white hover:bg-gray-200 rounded-t-lg cursor-pointer">
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
    </div>
  );
};

const ContentText = () => (
  <div className="z-10">
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
            Lees hier wat ik doe{" "}
          </span>
        </a>
      </Link>

      <p className="text-white inline-block my-2 text-lg">of</p>

      <Link href="/contact" passHref>
        <a>
          <span className="border-solid border-b border-color1 text-lg text-white">
            {" "}
            neem direct contact met mij op!
          </span>
        </a>
      </Link>
    </div>
  </div>
);
