import { useEffect, useMemo, useRef } from "react";

type Star = {
  x: number;
  y: number;
  radius: number;
  speed: number;
  opacity: number;
  swayAmplitude: number; // pixels left/right
  swayFrequency: number; // sway speed
  swayAngle: number; // angle of sway
};

const createFlake = (width: number, height: number): Star => ({
  x: Math.random() * width,
  y: Math.random() * height,
  radius: Math.random() * 2.5 + 1,
  speed: Math.random() * 1.5 + 0.5,
  opacity: Math.random() * 0.5 + 0.3,
  swayAmplitude: Math.random() * 2 + 1, // pixels left/right
  swayFrequency: Math.random() * 0.01 + 0.005, // sway speed
  swayAngle: Math.random() * Math.PI * 2,
});

type SnowCanvasProps = {
  className?: string;
  flakeCount?: number;
};

export const SnowCanvas = ({
  flakeCount = 300,
  className = "",
}: SnowCanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const flakes = useMemo(
    () =>
      Array.from({ length: flakeCount }, () =>
        createFlake(window.innerWidth, window.innerHeight),
      ),
    [flakeCount, window.innerWidth],
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      console.warn("Canvas not found");
      return;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      console.warn("Canvas context not found");
      return;
    }

    let animationFrameId: number;

    const animate = () => {
      const { width, height } = canvas;
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
      for (const flake of flakes) {
        flake.swayAngle += flake.swayFrequency;
        flake.x += Math.sin(flake.swayAngle) * flake.swayAmplitude;
        flake.y += flake.speed;

        if (flake.y > height) {
          flake.y = 0;
          flake.x = Math.random() * width;
        }

        ctx.beginPath();
        ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${flake.opacity})`;
        ctx.shadowBlur = 5;
        ctx.shadowColor = "rgba(255, 255, 255, 0.5)";
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute top-0 left-0 w-full h-full pointer-events-none ${className}`}
      width={window.innerWidth}
      height={window.innerHeight}
    />
  );
};
export default SnowCanvas;
