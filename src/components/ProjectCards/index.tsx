import GoblinScribeMain from "../../assets/projects/goblin-scribe/main.png";
import GoblinScribeBackground from "../../assets/projects/goblin-scribe/background.gif";
import AppraiseCalculatorMain from "../../assets/projects/appraise-calculator/main.png";
import AppraiseCalculatorBackground from "../../assets/projects/appraise-calculator/background.gif";
import MinesweeperMain from "../../assets/projects/minesweeper/main.png";
import MinesweeperBackground from "../../assets/projects/minesweeper/background.gif";

import LumberjackMain from "../../assets/projects/lumberjack/main.png";
import LumberjackBackground from "../../assets/projects/lumberjack/background.gif";

import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";

type ProjectConfig = {
  name: string;
  description?: string;
  link?: string;
  image?: string;
  backgroundImage?: string;
  cols: number;
  rows: number;
};

type SpacerConfig = {
  cols: number;
  rows: number;
};

const ProjectCardsConfig: Array<ProjectConfig | SpacerConfig> = [
  {
    cols: 3,
    rows: 1,
  },
  {
    name: "Goblin Scribe",
    description: "This is a description of Project 2.",
    link: "/projects/goblin-scribe",
    image: GoblinScribeMain,
    backgroundImage: GoblinScribeBackground,
    cols: 3,
    rows: 2,
  },
  {
    cols: 1,
    rows: 1,
  },
  {
    name: "Appraisal CSV Parser",
    description: "This is a description of Project 1.",
    link: "/projects/appraise-csv-parse",
    image: AppraiseCalculatorMain,
    backgroundImage: AppraiseCalculatorBackground,
    cols: 2,
    rows: 1,
  },
  {
    name: "Lumberjack",
    description: "This is a description of Project 3.",
    link: "/projects/lumberjack",
    image: LumberjackMain,
    backgroundImage: LumberjackBackground,
    cols: 3,
    rows: 2,
  },
  {
    name: "Minesweeper",
    description: "This is a description of Project 4.",
    link: "/projects/minesweeper",
    image: MinesweeperMain,
    backgroundImage: MinesweeperBackground,
    cols: 2,
    rows: 1,
  },
];

const ProjectCard = ({
  project,
  delay = 0,
}: {
  project: ProjectConfig;
  delay: number;
}) => {
  const handleClick = () => {
    if (project.link && window.innerWidth < 768) {
      window.open(project.link, "_blank");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      onClick={handleClick}
      style={{
        gridColumn: `span ${project.cols} / span ${project.cols}`,
        gridRow: `span ${project.rows} / span ${project.rows}`,
      }}
      className="relative overflow-hidden rounded-xl shadow-md group mb-6 md:mb-0"
    >
      <div className="relative w-full h-full object-cover transition-transform duration-500 group-hover:scale-105">
        <motion.img
          src={project.image}
          alt={project.name}
          className="absolute w-full h-full object-cover transition-transform duration-500 group-hover:opacity-0"
          whileHover={{ x: [-5, 0, 5, 0] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
          }}
        />
        <motion.img
          src={project.backgroundImage}
          alt={project.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-0  group-hover:opacity-100"
          whileHover={{ x: [-5, 0, 5, 0] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
          }}
        />
      </div>

      {/* Overlay content — visible on hover (desktop) */}
      <div className="absolute inset-0 bg-black/50 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
        <h3 className="text-white text-xl font-bold">{project.name}</h3>
        <div className="flex gap-3 mt-2">
          {project.link && (
            <Link
              to={project.link}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              Check This Out!
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Spacer = ({ spacer }: { spacer: SpacerConfig }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        gridColumn: `span ${spacer.cols} / span ${spacer.cols}`,
        gridRow: `span ${spacer.rows} / span ${spacer.rows}`,
      }}
      //className="relative overflow-hidden rounded-xl shadow-md group bg-red-300"
    ></motion.div>
  );
};

const ProjectCards = () => {
  return (
    <div className="md:grid md:grid-cols-6 auto-rows-[200px] gap-4">
      {ProjectCardsConfig.map((project, index) =>
        "name" in project ? (
          <ProjectCard
            key={`project-${index}`}
            project={project}
            delay={index * 0.1 + 0.2}
          />
        ) : (
          <Spacer spacer={project} />
        ),
      )}
    </div>
  );
};

export default ProjectCards;
