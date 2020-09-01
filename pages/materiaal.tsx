const R = require("ramda");

import Nav from "../components/nav";
import { Title } from "../components/title";

import { Pagination } from "../components/pagination";

const Materiaal = () => {
  const truncate = R.when(R.and(true, R.__), (a) => console.log("it works", a));

  return (
    <div className="relative">
      <div className="overlay-background-image bg-blue-100 opacity-50" />
      <Nav />

      <div className="content-container">
        <Title
          color="#013f5d"
          title="Materiaal / video's"
          subtitle="Via onderstaande link kun je kijken tussen de werkvormen en materialen die ik gemaakt heb voor mijn leerlingen."
        />

        <div className="mb-8 ">
          <p className="text-lg">
            De materialen zijn zo goed als van mijn eigen hand, maar toch zal ik
            via via inspiratie hebben opgedaan van collega’s en andere bronnen.
            Mocht je onverhoopt eigenaar zijn van bepaalde inhoud; neem dan
            contact op.
          </p>

          <ul>
            <li>
              <a
                className="border-solid border-b border-color1 text-lg"
                href="https://drive.google.com/drive/folders/1n3RtRa0YGsJpYJ9-XhGrjL3uZmIQuSUZ"
              >
                3 havo / 3 vwo
              </a>
            </li>
            <li>
              <a
                className="border-solid border-b border-color1 text-lg"
                href="https://drive.google.com/drive/folders/13ZlmFZRhHLx93_Jh-jbqLj___cCc34bG"
              >
                4 havo / 4 vwo
              </a>
            </li>
            <li>
              <a
                className="border-solid border-b border-color1 text-lg"
                href="https://drive.google.com/drive/folders/1_QW9AcIrPOQVkJHelTbpd1w0AGXcgYe0"
              >
                5 havo
              </a>
            </li>
            <li>
              <a
                className="border-solid border-b border-color1 text-lg"
                href="https://drive.google.com/drive/folders/121vv_HEM97XdHnWvPg6yULTxAG4bhBwD"
              >
                6 vwo
              </a>
            </li>
            <li>
              <a
                className="border-solid border-b border-color1 text-lg"
                href="https://drive.google.com/drive/folders/1YWKZQVZBsbe-i3dJDxP7rnBGNcHOJmcR"
              >
                Algemene werkvormen
              </a>
            </li>
          </ul>
        </div>

        <h2>Bekijk mijn youtube filmpjes</h2>
        <div className="grid md:grid-cols-2 gap-4 max-w-6xl mx-auto ">
          <div>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/YF1gViTU5M4"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <div>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/YF1gViTU5M4"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <div>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/YF1gViTU5M4"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Materiaal;
