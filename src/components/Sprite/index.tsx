import { useEffect, useRef } from "react";

type Props = {
  frameWidth: number;
  frameHeight: number;
  heightOffset?: number;
  numberOfFrames: number;
  image: HTMLImageElement;
  fps?: number;
};

const SpriteSheetAnimation = ({
  frameHeight,
  frameWidth,
  heightOffset = 0,
  numberOfFrames,
  image,
  fps = 20,
}: Props) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationId = useRef(0);
  const frameIndexRef = useRef(0);
  const lastFrameTimeRef = useRef(performance.now());
  const scale = 1;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const scaledWidth = frameWidth * scale;
    const scaledHeight = frameHeight * scale;
    canvas.width = scaledWidth;
    canvas.height = scaledHeight;

    let isCancelled = false;

    const drawFrame = (frameIndex: number) => {
      ctx.clearRect(0, 0, scaledWidth, scaledHeight);
      ctx.save();
      ctx.scale(scale, scale);
      ctx.drawImage(
        image,
        frameIndex * frameWidth,
        heightOffset,
        frameWidth,
        frameHeight,
        0,
        0,
        frameWidth,
        frameHeight,
      );
      ctx.restore();
    };

    const startAnimation = () => {
      const animate = (timestamp: number) => {
        const elapsed = timestamp - lastFrameTimeRef.current;
        const frameDuration = 1000 / fps;

        if (elapsed >= frameDuration) {
          lastFrameTimeRef.current = timestamp;
          frameIndexRef.current = (frameIndexRef.current + 1) % numberOfFrames;
          drawFrame(frameIndexRef.current);
        }

        animationId.current = requestAnimationFrame(animate);
      };

      animationId.current = requestAnimationFrame(animate);
    };

    const init = async () => {
      if (image.complete) {
        if ("decode" in image) {
          try {
            await image.decode();
          } catch {
            // ignore decode errors, fallback to draw anyway
          }
        }

        if (!isCancelled) {
          frameIndexRef.current = 0;
          drawFrame(0); // draw the first frame right away
          startAnimation();
        }
      } else {
        image.onload = () => {
          if (!isCancelled) {
            drawFrame(0);
            startAnimation();
          }
        };
      }
    };

    init();

    return () => {
      isCancelled = true;
      cancelAnimationFrame(animationId.current);
    };
  }, [image, frameWidth, frameHeight, numberOfFrames, heightOffset, fps]);

  return <canvas ref={canvasRef} className="block" />;
};

export default SpriteSheetAnimation;
