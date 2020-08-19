import styled from "styled-components";

import Nav from "../components/nav";

import { Title } from "../components/title";
import { Thema } from "../components/aanbod/thema's";

const Icon = styled.div`
  width: calc(5rem);
  height: calc(5rem * 0.645);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: calc(5rem * 0.1);
  background-color: white;
  box-shadow: rgba(97, 4, 95, 0.07) 0px 10px 40px 0px,
    rgba(62, 57, 107, 0.06) 0px 2px 9px 0px;
  &:before,
  &:after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: inherit;
    height: inherit;
    background-image: inherit;
    border-radius: inherit;
    background-color: white;
  }
  &:before {
    transform: rotate(60deg);
  }
  &:after {
    transform: rotate(-60deg);
  }
  > i {
    position: relative;
    z-index: 1;
    font-size: 3rem;
    background: -moz-linear-gradient(top, #015077 0%, #77bca9 100%);
    background: -webkit-linear-gradient(top, #015077 0%, #77bca9 100%);
    background: linear-gradient(to bottom, #015077 0%, #77bca9 100%);
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  position: absolute;
  transform: translate(-50%, -100%);
  left: 50%;
`;

const Aanbod = () => {
  const path = "dennis_voor_de_klas.jpeg";
  const color = "red";
  return (
    <div className="relative">
      <div className="overlay-background-image bg-blue-100 opacity-50" />

      <Nav />

      <div className="content-container">
        <Title color="#013f5d" title="Aanbod" />

        <p className="text-base pb-6 md:text-lg">
          Als onderwijsadviseur geef ik trainingen en workshops voor scholen en
          congressen. De inhoud hiervan is gebaseerd op evidence based
          education; zinnig lesgeven op manieren die effectief blijken uit
          onderwijsonderzoek. Zo vorm ik een brug tussen wat theoretisch werkt
          en hoe het concreet in lessen in te passen is. Het is mijn missie om
          onderwijzers concrete inspiratie en handvatten te geven, die ze gelijk
          de volgende les kunnen inzetten. De concrete invulling van een lezing
          of trainingsdag is altijd in overleg.
        </p>

        <div className="text-base mb-6">
          <Thema />
        </div>
        <div className="grid sm:grid-cols-2 gap-4 max-w-6xl mx-auto  mb-12">
          <div className=" h-64">
            <img
              src={require(`images/${path}?webp`)}
              alt="Dennis stassen voor de klas"
              className="object-cover h-full w-full rounded "
            />
          </div>
          <div className=" h-64">
            <img
              src={require(`images/${path}?webp`)}
              alt="Dennis stassen voor de klas"
              className="object-cover h-full w-full rounded"
            />
          </div>
        </div>

        <h4 className="text-xl	font-black text-center mb-8">
          Trainingsaanbod (suggesties, in overleg is veel mogelijk)
        </h4>
        <div className="flex flex-wrap">
          <div className=" w-full sm:w-1/2 py-8 sm:px-4">
            <div className="relative text-center rounded-lg bg-white p-6 shadow-2xl">
              <Icon>
                <i className="material-icons">timer</i>
              </Icon>
              <div className="mt-6">
                <h3 className={`text-2xl text-${color}`}>Workshops</h3>
                <p className="text-base	">
                  Meerdere workshoprondes van 45 minuten per ronde in groepen
                  van maximaal 30 personen per ronde. Tarief inclusief BTW,
                  exclusief reiskosten €85 per ronde (minimaal 2 rondes)
                </p>
              </div>
            </div>
          </div>

          <div className="w-full sm:w-1/2 py-8 sm:px-4">
            {" "}
            <div className="relative text-center rounded-lg bg-white p-6 shadow-2xl">
              <Icon>
                <i className="material-icons">school</i>
              </Icon>
              <div className="mt-6">
                <h3 className="text-2xl	font-black">Trainingsmiddag</h3>
                <p className="text-base	">
                  Driedelige trainingsmiddag van 3x 2 uur voor groep van 20-25
                  docenten. Waarbij docenten gespreid over bijvoorbeeld een half
                  jaar handvatten krijgen, gelegenheid om het geleerde in te
                  zetten en ruimte hebben voor reflectie en terugkoppeling op de
                  middagen. Tarief voor alle drie de middagen inclusief BTW,
                  exclusief reiskosten: €675
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full sm:w-1/2 py-8 sm:px-4">
          <div className="relative text-center rounded-lg bg-white p-6 shadow-2xl">
            <Icon>
              <i className="material-icons">work</i>
            </Icon>
            <div className="mt-6">
              <h3 className="text-2xl	font-black">Lezing</h3>
              <p className="text-base	">
                Plenaire lezing/dagstart van 60 minuten. Tarief inclusief BTW,
                exclusief reiskosten €110
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aanbod;
