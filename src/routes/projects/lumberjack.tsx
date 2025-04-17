import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import GithubIcon from "../../assets/logos/github.svg";

export const Route = createFileRoute("/projects/lumberjack")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="m-20 text-foreground">
      <motion.h1
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl mb-4 font-bold"
      >
        Lumberjack
      </motion.h1>
      <section className="my-4">
        <motion.h3 className="text-xl underline">Description</motion.h3>
        <p className="text-md">
          Lumberjac is a cozy survival clicker game where patience and timing
          are key. Players wait for trees to grow and strategically chop them
          down—fully grown trees yield more rewards, encouraging smart
          harvesting. As players tend their forest, wolves will occasionally
          appear, forcing them to dodge or risk losing health. This was made
          with Excalibur.js.
        </p>
      </section>
      <section>
        <div className="flex gap-2 mb-2">
          <a
            href="https://lumberjack-mini.onrender.com/"
            style={{ backgroundColor: "forestgreen" }}
            className="text-white rounded-md p-1 h-10 flex items-center"
          >
            Visit Example
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/ajones119/lumberjack-mini"
            style={{ backgroundColor: "forestgreen" }}
            className="text-white rounded-md p-1 h-10"
          >
            <img src={GithubIcon} alt="github repo" className="w-full h-full" />
          </a>
        </div>
        <iframe
          src="https://lumberjack-mini.onrender.com/"
          width="100%"
          height="700"
          className="rounded-md"
        ></iframe>
      </section>
    </div>
  );
}
