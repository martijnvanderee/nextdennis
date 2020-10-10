import Link from "next/link";

const path = "dennisCloseup.jpg";
export const Header = () => (
  <div className="relative flex p-6 mt-16 rounded-lg mb-16 shadow-offsetHover">
    <div className="absolute w-full h-full inset-0 opacity-75 rounded-lg bg-color3" />
    <img
      className="relative opacity-0 hidden h-64 w-auto my-auto mr-8 rounded  md:opacity-100 md:block"
      src={path}
    />
    <div className="relative">
      <p className="text-white text-lg">
        Welkom op mijn zoektocht naar beter onderwijs.
      </p>

      <p className="my-2 text-lg text-white">
        Graag deel ik met jou mijn bevindingen en hersenspinsels hierover.
      </p>
      <p className="my-2 text-lg text-white">
        Daarnaast vind je werkvormen, presentaties en video’s om vrij te
        gebruiken voor (economie) lessen.
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
