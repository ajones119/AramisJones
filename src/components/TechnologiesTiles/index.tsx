import ReactIcon from "../../assets/react.svg";
import MotionIcon from "../../assets/logos/framer-motion.svg";
import MongoDBIcon from "../../assets/logos/mongodb-icon-1.svg";
import TanstackIcon from "../../assets/logos/tanstack.png";
import TailwindIcon from "../../assets/logos/tailwindcss.svg";
import PythonIcon from "../../assets/logos/python-5.svg";
import Magnetic from "../../animation-wrappers/magnetic";
import Tooltip from "../Tooltip";

type TileConfig = {
  name: string;
  icon?: string;
  description?: string;
  link?: string;
};

const Technologies = [
  {
    name: "React",
    icon: ReactIcon,
    description: "A JavaScript library for building user interfaces.",
    link: "https://reactjs.org/",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    description:
      "A superset of JavaScript that compiles to clean JavaScript output.",
    link: "https://www.typescriptlang.org/",
  },
  {
    name: "Tailwind CSS",
    icon: TailwindIcon,
    description: "A utility-first CSS framework for creating custom designs.",
    link: "https://tailwindcss.com/",
  },
  {
    name: "Motion",
    icon: MotionIcon,
    description: "A library for creating animations in React.",
    link: "https://motion.dev/",
  },
  {
    name: "Tanstack",
    icon: TanstackIcon,
    description: "A set of libraries for building data-driven applications.",
    link: "https://tanstack.com/",
  },
  {
    name: "MongoDB",
    icon: MongoDBIcon,
    description: "A NoSQL database for modern applications.",
    link: "https://www.mongodb.com/",
  },
  {
    name: "Python",
    icon: PythonIcon,
    description:
      "A programming language that lets you work quickly and integrate systems more effectively.",
    link: "https://www.python.org/",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    description: "A JavaScript runtime built on Chrome's V8 JavaScript engine.",
    link: "https://nodejs.org/",
  },
  {
    name: "CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    description:
      "A stylesheet language used to describe the presentation of a document.",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    name: "SCSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
    description:
      "A CSS preprocessor that adds power and elegance to the basic language.",
    link: "https://sass-lang.com/",
  },
  {
    name: "Firebase",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    description:
      "A platform developed by Google for creating mobile and web applications.",
    link: "https://firebase.google.com/",
  },
  {
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    description: "An open-source relational database management system.",
    link: "https://www.mysql.com/",
  },
  {
    name: "Supabase",
    icon: "https://img.icons8.com/color/512/supabase.png",
    description: "An open-source Firebase alternative built on PostgreSQL.",
    link: "https://supabase.com/",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    description:
      "A distributed version control system for tracking changes in source code.",
    link: "https://git-scm.com/",
  },
];

const Tile = (tile: TileConfig) => {
  return (
    <Tooltip text={tile.name}>
      <Magnetic>
        <div className="w-16 h-16 p-1 bg-transparent border-2 border-foreground rounded-lg shadow-md my-auto flex items-center justify-center hover:scale-105 transition-transform duration-300 ease-in-out">
          <a
            href={tile.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center text-center text-foreground"
          >
            <img src={tile.icon} alt={tile.name} className="w-full h-full" />
          </a>
        </div>
      </Magnetic>
    </Tooltip>
  );
};

const TechnologiesTiles = () => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-4 p-4 w-full">
      {Technologies.map((tile: TileConfig, index: number) => (
        <Tile key={index} {...tile} />
      ))}
    </div>
  );
};

export default TechnologiesTiles;
