import Link from "next/link";

export const Header = () => {
  const path = "dennisCloseup.jpg";
  return (
    <div className="relative flex p-6 mt-16 rounded mb-16">
      <div className="absolute w-full h-full inset-0 opacity-75 rounded bg-color3" />
      <img
        className="relative opacity-0 hidden h-64 w-auto my-auto mr-8 rounded  md:opacity-100 md:block"
        src={path}
      />
      <div className="relative">
        <p className="text-white text-lg">
          Hey ik ben Dennis Stassen, een eerste graads economie docent op het
          Minkema college in Woerden. Leuk dat je een kijkje neemt op mijn site.
        </p>

        <p className="inline-block my-2 text-lg text-white">
          Leerlingen hangen achterover, hebben slechte reflectie en maken te
          weinig stappen vooruit?
        </p>
        <p className="inline-block my-2 text-lg text-white">
          Krijg werkvormen, inspiratie en ideeën om ze te activeren op basis van
          wat echt werkt volgens onderwijsonderzoek!
        </p>

        <div>
          <Link href="/about" passHref>
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
    </div>
  );
};
