import styled from "styled-components";

import Nav from "../components/nav";

import { Title } from "../components/title";

const About = () => {
  const path = "dennisCloseup.jpg";

  return (
    <div className="relative">
      <div className="overlay-background-image bg-blue-100 opacity-25" />
      <Nav />

      <div className="content-container">
        <Title color="#013f5d" title="Over Mij" />

        <div className="md:flex border-b-2 border-gray-200">
          <div className="mr-8">
            <div className="h-64 w-48 mx-auto mb-4 ">
              <img
                src={require(`images/${path}?webp`)}
                alt="Dennis stassen voor de klas"
                className="object-cover h-full w-full rounded "
              />
            </div>
          </div>

          <p className="text-base text-center md:text-lg">
            In 2015 ben ik afgestuurd econoom aan Tilburg University, waarna ik
            bij dezelfde universiteit in 2016 de opleiding tot leraar VO
            succesvol heb afgerond. Gelijk d aarna ben ik aan de slag gegaan als
            docent economie bij het Minkema College te Woerden en geef ik les
            aan 3 havo t/m 6 vwo. Ik heb mijn passie voor economie kunnen
            combineren met het onderwijsbloed vanuit mijn moeders kant van de
            familie. De nuttige inzichten met betrekking tot effectief lesgeven
            wil ik graag delen en op kant-en-klare manier aanbieden aan andere
            gepassioneerde docenten.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
