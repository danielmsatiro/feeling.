import boris_avatar from "../assets/creators/boris-avatar.svg";
import boris_picture from "../assets/creators/boris-picture.jpg";
import daniel_picture from "../assets/creators/daniel-picture.png";
import guilherme_avatar from "../assets/creators/guilherme-avatar.svg";
import guilherme_pic from "../assets/creators/guilherme-picture.jpg";
import pedro_avatar from "../assets/creators/pedro-avatar.svg";
import pedro_picture from "../assets/creators/pedro-picture.png";

export const creatorsInfo = [
  {
    id: 1,
    avatar: boris_avatar,
    picture: boris_picture,
    name: "Boris Gaibor",
    role: "Quality Assurance",
    github: "",
    linkedin: "",
    description: "",
  },

  {
    id: 2,
    avatar: "",
    picture: daniel_picture,
    name: "Daniel Satiro",
    role: "Quality Assurance",
    github: "https://github.com/danielmsatiro",
    linkedin: "https://www.linkedin.com/in/daniel-mateus-satiro/",
    description: "",
  },
  {
    id: 3,
    avatar: guilherme_avatar,
    picture: guilherme_pic,
    name: "Guilherme Couto",
    role: "Tech Leader",
    github: "https://github.com/GuiCoutoSt",
    linkedin: "https://www.linkedin.com/in/guilhermecoutodev",
    description:
      "Tenho 26 anos, gosto de café expresso, dias ensolarados e de projetos que fazem a diferença.",
  },
  {
    id: 4,
    avatar: "",
    picture: "",
    name: "Inti Ferreira",
    role: "Product Owner",
    github: "https://github.com/inti-ferreira",
    linkedin: "https://www.linkedin.com/in/intiferreira/",
  },
  {
    id: 5,
    avatar: pedro_avatar,
    picture: pedro_picture,
    name: "Pedro Basilio",
    role: "Scrum Master",
    github: "",
    linkedin: "",
    description:
      "Amante de Kung Fu Panda e um entusiasta que abraça o mundo pelas artes e tecnologia.",
  },
];

export const creatorFinder = (id) => {
  const creator = creatorsInfo.find((creator) => creator.id === id);
  return creator;
};
