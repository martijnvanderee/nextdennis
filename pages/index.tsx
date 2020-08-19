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
    <div className="absolute w-full h-full top-0 right-0 z-0">
      <div className="absolute object-contain opacity-25 h-full w-full bg-color3 z-10" />
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
  const imagePath = "dennisCloseup.jpg";
  return (
    <div className="relative flex p-12 mt-16 rounded">
      <div className="absolute w-full h-full inset-0 opacity-50 rounded bg-color3" />
      <img
        className="z-10 opacity-0 hidden h-64 w-auto my-auto mr-8 rounded  md:opacity-100 md:block"
        src={require(`images/${imagePath}?webp`)}
      />
      <ContentText />
    </div>
  );
};

const ContentText = () => (
  <div className="z-10">
    <p className="text-white text-lg">
      Hey ik ben Dennis Stassen, een eerste graads economie docent op het
      Minkema college in Woerden.
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
