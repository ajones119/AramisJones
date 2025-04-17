import { createFileRoute } from "@tanstack/react-router";
import { ParallaxBackdrop } from "../components/ParallaxBackdrop";
import AvatarSpinner from "../components/AvatarSpinner";
import { motion } from "motion/react";
import TechnologiesTiles from "../components/TechnologiesTiles";
import ProjectCards from "../components/ProjectCards";
import FancyButton from "../components/FancyButton";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="bg-background">
      {/* Scrollable container that controls the length of the parallax */}
      <ParallaxBackdrop />

      {/* Next Section appears directly after scroll */}
      <motion.section
        initial={{ y: 10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        className="h-screen flex items-center justify-center text-foreground"
      >
        <div className="text-center flex-col items-center justify-center">
          <motion.div
            className="m-auto w-fit relative"
            initial={{ x: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <AvatarSpinner />
            <div className="absolute top-[35%] left-[-20%]"></div>
          </motion.div>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4"
          >
            Hi, I'm Aramis — Software Engineer & Developer
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto"
          >
            Creating innovative user experiences with React, Tailwind, and more.
            Let’s build something amazing together.
          </motion.p>
          <FancyButton
            onClick={() => {
              document.getElementById("projects")?.scrollIntoView({
                behavior: "smooth", // or 'auto'
                block: "start", // or 'center', 'end', 'nearest'
              });
            }}
          >
            Explore My Work
          </FancyButton>
        </div>
      </motion.section>
      <motion.section
        initial={{ y: 10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        className="flex items-center justify-center text-foreground mb-28"
      >
        <div className="text-center flex-col items-center justify-center max-w-lg">
          <h2 className="text-2xl mb-4">Tech Stack Experience</h2>
          <TechnologiesTiles />
        </div>
      </motion.section>

      <motion.section
        id="projects"
        initial={{ y: 10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        className="flex items-center justify-center text-foreground"
      >
        <div className="text-center flex-col items-center justify-center m-8">
          <h2 className="text-3xl mb-4">Projects</h2>
          <ProjectCards />
        </div>
      </motion.section>
    </div>
  );
}
