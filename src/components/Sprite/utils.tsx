import Walk from "../../assets/lumberjack/Woodcutter_walk.png";
import Still from "../../assets/lumberjack/Woodcutter_idle.png";
import Run from "../../assets/lumberjack/Woodcutter_run.png";
import Push from "../../assets/lumberjack/Woodcutter_push.png";
import Cut from "../../assets/lumberjack/Woodcutter_attack2.png";

type Config = {
  imageUrl: string;
  numberOfFrames: number;
  fps: number;
};

export const lumberjackImageConfig: Record<string, Config> = {
  walk: {
    imageUrl: Walk,
    numberOfFrames: 6,
    fps: 10,
  },
  still: {
    imageUrl: Still,
    numberOfFrames: 4,
    fps: 10,
  },
  run: {
    imageUrl: Run,
    numberOfFrames: 6,
    fps: 20,
  },
  push: {
    imageUrl: Push,
    numberOfFrames: 6,
    fps: 10,
  },
  cut: {
    imageUrl: Cut,
    numberOfFrames: 6,
    fps: 10,
  },
};
