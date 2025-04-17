import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import GithubIcon from "../../assets/logos/github.svg";
import logo from "../../assets/projects/goblin-scribe/gs-logo-1.png";
import block from "../../assets/projects/goblin-scribe/block.png";
import demoGif from "../../assets/projects/goblin-scribe/background.gif";
import dashboardDemo from "../../assets/projects/goblin-scribe/dashboarddemo.png";
import mapDemo from "../../assets/projects/goblin-scribe/mapdemo.png";

export const Route = createFileRoute("/projects/goblin-scribe")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="m-20 text-foreground">
      <div className="min-h-screen w-full text-foreground p-6 md:p-12 space-y-16">
        {/* Logo + Title */}
        <div className="flex flex-col items-center text-center space-y-4">
          <Logo />
          <motion.h1
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold tracking-tight"
          >
            Goblin Scribe
          </motion.h1>
          <p className="max-w-3xl text-lg md:text-xl text-zinc-400">
            A powerful and customizable TTRPG campaign management tool. Run
            entire campaigns, manage locations, characters, combat, notes, and
            more.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Demo GIF */}
          <FeatureCard
            title="Live Demo"
            description="See Goblin Scribe in action with a preview of combat, notes, and interactions."
            image={demoGif}
          />

          {/* Combat */}
          <FeatureCard
            title="Combat Management"
            description="Track initiative, manage monsters, fog of war, dice rolling, and token visibility with precision tools."
            image={block}
          />

          {/* Map */}
          <FeatureCard
            title="Interactive Map"
            description="Editable battle maps with fog of war, movement tools, and player-controlled tokens."
            image={mapDemo}
          />

          {/* Optional Notes or Dashboards */}
          <FeatureCard
            title="Shared Notes"
            description="Keep track of lore, secrets, and campaign details with public and private notes."
            image={dashboardDemo}
          />
        </div>
        <section className="mx-auto">
          <div className="flex gap-2 mb-2 items-center justify-center">
            <a
              href="https://appraisecsvvisualize.onrender.com/"
              style={{ backgroundColor: "orange" }}
              className="text-white rounded-md p-1 h-10 flex items-center"
            >
              Visit Example
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/ajones119/AppraiseCsvVisualize"
              style={{ backgroundColor: "orange" }}
              className="text-white rounded-md p-1 h-10"
            >
              <img
                src={GithubIcon}
                alt="github repo"
                className="w-full h-full"
              />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

type FeatureCardProps = {
  title: string;
  description: string;
  image: string;
};

const FeatureCard = ({ title, description, image }: FeatureCardProps) => {
  return (
    <motion.div className="rounded-2xl overflow-hidden bg-zinc-900 shadow-2xl p-4 space-y-3 transition-all duration-300">
      <img
        src={image}
        alt={title}
        className="w-full rounded-lg object-cover aspect-video"
      />
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="text-zinc-400">{description}</p>
    </motion.div>
  );
};

const Logo = () => {
  return (
    <motion.div id="logo" className="relative">
      <svg width={0} height={0}>
        <filter
          id="blur-and-scale"
          y="-50%"
          x="-50%"
          width="200%"
          height="200%"
        >
          <feGaussianBlur
            in="sourceGraphic"
            stdDeviation={20}
            result="blurred"
          />
          <feColorMatrix type="saturate" in="blurred" values="4" />
          <feComposite in="sourceGraphic" operator={"over"} />
        </filter>
      </svg>
      <div
        className={`absolute inset-0 filter-[url(#blur-and-scale)] left-[24px]`}
      >
        <img src={logo} alt="Goblin Scribe" />
      </div>
      <div className="absolute inset-0 left-[24px]">
        <img src={logo} alt="Goblin Scribe" />
      </div>
    </motion.div>
  );
};
