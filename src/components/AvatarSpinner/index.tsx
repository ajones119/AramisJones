import Avatar1 from "../../assets/me/linkidn pic.jpg";
import Avatar2 from "../../assets/me/aramisnarwen.png";
import { motion, useMotionValue } from "motion/react";
import { useMemo, useState } from "react";
import SpriteSheetAnimation from "../Sprite";
import { lumberjackImageConfig } from "../Sprite/utils";
import { usePreloadedImages } from "../../hooks/usePreloadImages";

const AvatarSpinner = () => {
  const angle = useMotionValue(0);
  const [image, setImage] =
    useState<keyof typeof lumberjackImageConfig>("still");

  const { images } = usePreloadedImages(
    Object.entries(lumberjackImageConfig).reduce(
      (acc, value) => {
        acc[value[0]] = value[1].imageUrl;
        return acc;
      },
      {} as Record<string, string>,
    ),
  );

  const fullSpriteConfig: Record<
    keyof typeof lumberjackImageConfig,
    { image: HTMLImageElement; numberOfFrames: number; fps: number }
  > | null = useMemo(() => {
    if (!images) return null;
    return {
      walk: { image: images.walk, ...lumberjackImageConfig.walk },
      still: { image: images.still, ...lumberjackImageConfig.still },
      cut: { image: images.cut, ...lumberjackImageConfig.cut },
      run: { image: images.run, ...lumberjackImageConfig.run },
    };
  }, [images]);

  return (
    <motion.div
      className="relative w-32 h-32 perspective-normal cursor-pointer"
      onClick={() => {
        setImage("cut");

        setTimeout(() => {
          setImage("still");
          angle.set(angle.get() - 540);
        }, 500);
      }}
    >
      <div className="absolute top-[30%] left-[-30%]">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute border-foreground border rounded-md  p-1 text-foreground text-nowrap left-[-50px] top-[-30px]"
          >
            Click Me
            <div className="absolute left-14 -bottom-2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-foreground" />
          </motion.div>
          <motion.div className="absolute z-10" transition={{ duration: 0.01 }}>
            {fullSpriteConfig?.[image] && (
              <SpriteSheetAnimation
                image={fullSpriteConfig[image].image}
                frameHeight={48}
                frameWidth={48}
                numberOfFrames={fullSpriteConfig[image].numberOfFrames}
                heightOffset={0}
                fps={fullSpriteConfig[image].fps}
              />
            )}
          </motion.div>
        </div>
      </div>
      <motion.div
        className="w-full h-full rotate-y-180 transition-transform duration-700 ease-in-out preserve-3d"
        style={{ rotateY: angle, transformStyle: "preserve-3d" }}
        initial={{ rotateY: 0 }}
        transition={{ delay: 2 }}
      >
        <motion.img
          src={Avatar1}
          draggable="false"
          alt="Aramis Jones"
          className="w-32 h-32 rounded-full border-2 border-gray-300 shadow-lg top-0 left-0 absolute backface-hidden"
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
        <motion.img
          src={Avatar2}
          alt="Aramis Jones"
          draggable="false"
          className="w-32 h-32 rounded-full border-2 border-gray-300 shadow-lg top-0 left-0 absolute rotate-y-180 backface-hidden"
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>
    </motion.div>
  );
};

export default AvatarSpinner;
