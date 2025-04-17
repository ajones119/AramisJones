import { motion, useScroll, useTransform } from "motion/react";

//import grassland layers
import backdrop from "../../assets/grassland-layers/1.png";
import clouds from "../../assets/grassland-layers/2.png";
import midgroundHills from "../../assets/grassland-layers/3.png";
import foregroundHillsAndTree from "../../assets/grassland-layers/4.png";
import skyBirds from "../../assets/grassland-layers/5.png";

import StarCanvas from "./Canvases/StarCanvas";
import { DayCycle, useWeatherTheme } from "../../contexts/WeatherThemeContext";
import RainCanvas from "./Canvases/RainCanvas";
import SnowCanvas from "./Canvases/SnowCanvas";
import Clock from "../Clock";

const TIME_PRESETS: Record<
  DayCycle,
  {
    background: string;
    midground: string;
    foreground: string;
  }
> = {
  day: {
    background: [
      1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0,
    ].join(" "),
    midground: [
      1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0,
    ].join(" "),
    foreground: [
      1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0,
    ].join(" "),
  },
  golden: {
    background: [
      1.1, 0, 0, 0, 0.3, 0, 1.05, 0, 0, 0.05, 0, 0, 0.8, 0, -0.2, 0, 0, 0, 1, 0,
    ].join(" "),
    midground: [
      1.05, 0, 0, 0, 0.2, 0, 1.02, 0, 0, 0.06, 0, 0, 0.9, 0, -0.09, 0, 0, 0, 1,
      0,
    ].join(" "),
    foreground: [
      1.02, 0, 0, 0, 0.1, 0, 1.01, 0, 0, 0.02, 0, 0, 0.98, 0, -0.01, 0, 0, 0, 1,
      0,
    ].join(" "),
  },
  night: {
    background: [
      0.2, 0, 0, 0, 0.05, 0, 0.25, 0, 0, 0.05, 0, 0, 0.4, 0, 0.2, 0, 0, 0, 1, 0,
    ].join(" "),
    midground: [
      0.3, 0, 0, 0, 0, 0, 0.3, 0, 0, 0, 0, 0, 0.5, 0, 0.1, 0, 0, 0, 1, 0,
    ].join(" "),
    foreground: [
      0.5, 0, 0, 0, 0, 0, 0.5, 0, 0, 0.01, 0, 0, 0.7, 0, 0.06, 0, 0, 0, 1, 0,
    ].join(" "),
  },
};

export const ParallaxBackdrop = () => {
  const { scrollY } = useScroll();
  const { dayCycle, rain, snow, temperature } = useWeatherTheme();

  // Parallax transforms — tweak these values for more/less depth
  const y1 = useTransform(scrollY, [0, 1000], [0, -10]); // farthest layer
  const y2 = useTransform(scrollY, [0, 1000], [0, -10]);
  const y3 = useTransform(scrollY, [0, 1000], [0, -30]);
  const y4 = useTransform(scrollY, [0, 1000], [1.0, 1.2]);
  const y5 = useTransform(scrollY, [0, 1000], [0, -10]); // closest layer

  const colorMatrix = TIME_PRESETS[dayCycle]; // Change this to 'day', 'evening', or 'night' to see different color shifts
  const backgroundFilter = `url(#weatherColorShiftBackground)`;
  const midgroundFilter = `url(#weatherColorShiftMidground)`;
  const foregroundFilter = `url(#weatherColorShiftForeground)`;

  return (
    <div className="relative h-[150vh] drop-shadow-2xl">
      <svg width={0} height={0}>
        <filter id="weatherColorShiftBackground">
          <feColorMatrix
            type="matrix"
            values={colorMatrix.background}
            result="colorMatrix"
          />
        </filter>
      </svg>
      <svg width={0} height={0}>
        <filter id="weatherColorShiftMidground">
          <feColorMatrix
            type="matrix"
            values={colorMatrix.midground}
            result="colorMatrix"
          />
        </filter>
      </svg>
      <svg width={0} height={0}>
        <filter id="weatherColorShiftForeground">
          <feColorMatrix
            type="matrix"
            values={colorMatrix.foreground}
            result="colorMatrix"
          />
        </filter>
      </svg>
      {/* Sticky Parallax Scene */}
      <div
        className="sticky top-0 h-screen w-full overflow-hidden bg-black"
        style={{
          WebkitMaskImage:
            "linear-gradient(to bottom, black 80%, transparent 100%)",
          maskImage: "linear-gradient(to bottom, black 90%, transparent 100%)",
        }}
      >
        {/* Background layers */}
        <motion.img
          src={backdrop}
          className="absolute inset-0 w-full h-full object-cover z-0 scale-105"
          style={{
            y: y1,
            filter: `blur(${7}px) ${backgroundFilter}`,
            WebkitFilter: `blur(${7}px) ${backgroundFilter}`,
          }}
        />
        <motion.div
          style={{ scale: y4 }}
          className="absolute inset-0 w-full h-full object-cover z-5"
        >
          {snow ? <SnowCanvas /> : null}
          {rain ? <RainCanvas /> : null}
        </motion.div>
        {dayCycle === "night" && <StarCanvas className="z-1" />}

        <motion.img
          src={clouds}
          initial={{ x: -10, opacity: 1 }}
          animate={{ x: [-10, 10, -10] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
          className="absolute inset-0 w-full h-full object-cover z-1"
          style={{
            y: y2,
            scale: 1.05,
            filter: `${backgroundFilter} brightness(80%)`,
            WebkitFilter: backgroundFilter,
          }}
        />
        <motion.img
          src={midgroundHills}
          initial={{ x: 10, opacity: 1 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{delay: 0.2}}
          className="absolute inset-0 w-full h-full object-cover z-3"
          style={{
            y: y3,
            filter: midgroundFilter,
            WebkitFilter: midgroundFilter,
          }}
        />
        <motion.img
          src={foregroundHillsAndTree}
          initial={{ x: -5, opacity: 1 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{delay: 0.2}}
          className="absolute inset-0 w-full h-full object-cover z-4"
          style={{
            scale: y4,
            filter: foregroundFilter,
            WebkitFilter: foregroundFilter,
          }}
        />
        <motion.img
          src={skyBirds}
          initial={{ x: 5, opacity: 1 }}
          animate={{ x: 0, opacity: 1 }}
          className="absolute inset-0 w-full h-full object-cover z-5"
          style={{
            y: y5,
            filter: midgroundFilter,
            WebkitFilter: midgroundFilter,
          }}
        />

        {/* Intro text ("Hello!") fades in mid-scroll */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center z-20"
          style={{ y: -100 }}
        >
          <div>
            <h1 className="text-white text-6xl font-bold drop-shadow-xl">
              Hi! thanks for coming!
            </h1>
            <section className="bg-[length:200%_200%] bg-clip-text text-amber-400 animate-rainbow font-semibold">
              <Clock />
              <p>{temperature} °F in OKC</p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

/*

<motion.div style={{ scale: silhouetteScale }} className="absolute bottom-1 left-[-10] scale-105 w-full object-cover z-6">
<motion.img
  src={shadowedForegroundGrassSilohette}
  className="absolute bottom-1 left-[-10] scale-105 w-full object-cover z-6 opacity-60 brightness-200"
  animate={{ x: [1, 0, 1], rotate: [0, 0.25, 0] }}
  transition={{
    duration: 2,
    repeat: Infinity,
    repeatType: "loop",
    ease: "easeInOut",
  }}
/>
<motion.img
  src={shadowedForegroundGrassSilohette}
  className="absolute bottom-1 left-[-10] w-full object-cover z-6 opacity-80 brightness-200"
  animate={{ x: [1, 0, 1], rotate: [0, 0.25, 0] }}
  transition={{
    duration: 2,
    repeat: Infinity,
    repeatType: "loop",
    ease: "easeInOut",
  }}
/>
<motion.img
  src={shadowedForegroundGrassSilohette}
  className="absolute bottom-1 left-[-10] scale-95 w-full object-cover z-6 brightness-200"
  animate={{ x: [1, 0, 1], rotate: [0, 0.25, 0] }}
  transition={{
    duration: 2,
    repeat: Infinity,
    repeatType: "loop",
    ease: "easeInOut",
  }}
/>
</motion.div>
 */
