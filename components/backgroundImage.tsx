const outlineImg = require(`images/dennis_voor_de_klas.jpeg?trace`);
const fastImg = require(`images/dennis_voor_de_klas.jpeg?webp`);
const slowImg = require(`images/dennis_voor_de_klas.jpeg?`);

export const BackgroundImage = () => {
  return (
    <div className="fixed w-full h-full top-0 right-0 z-0">
      <div className="absolute object-contain opacity-50 h-full w-full bg-color3 z-10" />
      <div className="relative w-full h-full">
        <img
          className="absolute object-cover h-full w-full"
          alt="Dennis stassen voor de klas"
          src={outlineImg}
        />
        <img
          className="absolute object-cover h-full w-full"
          alt="Dennis stassen voor de klas"
          src={fastImg}
        />
        <img
          className="absolute object-cover h-full w-full"
          alt="Dennis stassen voor de klas"
          src={slowImg}
        />
      </div>
    </div>
  );
};
