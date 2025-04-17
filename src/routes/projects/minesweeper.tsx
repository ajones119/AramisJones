import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import GithubIcon from "../../assets/logos/github.svg";

export const Route = createFileRoute("/projects/minesweeper")({
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
        Minesweeper
      </motion.h1>
      <section className="my-4">
        <motion.h3 className="text-xl underline">Description</motion.h3>
        <p className="text-md">
          A modern take on the classic Minesweeper game, built with React and
          Tailwind CSS. This version includes difficulty levels—Easy, Medium,
          and Hard—which dynamically adjust the board size and number of mines.
          The game features a sleek space-themed design with an animated canvas
          backdrop for visual depth. When a mine is revealed, a wave-like
          explosion animation adds extra flair. Left-click to uncover tiles,
          right-click to flag suspected mines. Built for both functionality and
          style, this project combines interactive gameplay with thoughtful UI
          polish and performant react state.
        </p>
      </section>
      <section>
        <div className="flex gap-2 mb-2">
          <a
            href="https://minesweeper-v1.onrender.com/"
            style={{ backgroundColor: "deeppink" }}
            className="text-white rounded-md p-1 h-10 flex items-center"
          >
            Visit Example
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/ajones119/minesweeper-v1"
            style={{ backgroundColor: "deeppink" }}
            className="text-white rounded-md p-1 h-10"
          >
            <img src={GithubIcon} alt="github repo" className="w-full h-full" />
          </a>
        </div>
        <iframe
          src="https://minesweeper-v1.onrender.com/"
          width="100%"
          height="700"
          className="rounded-md"
        ></iframe>
      </section>
    </div>
  );
}
