import { useEffect, useMemo, useRef } from "react";

type Star = {
  x: number;
  y: number;
  radius: number;
  speed: number;
  direction: number;
  opacity: number;
  twinkleSpeed: number;
};

const createStar = (width: number, height: number): Star => ({
  x: Math.random() * width,
  y: Math.random() * height,
  radius: Math.random() * 1.5 + 0.5,
  speed: Math.random() * 0.05 + 0.02,
  direction: Math.random() * Math.PI * 2,
  opacity: Math.random() * 0.5 + 0.3,
  twinkleSpeed: Math.random() * 0.02 + 0.005,
});

type StarCanvasProps = {
  className?: string;
  starCount?: number;
};

export const StarCanvas = ({
  starCount = 300,
  className = "",
}: StarCanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stars = useMemo(
    () =>
      Array.from({ length: starCount }, () =>
        createStar(window.innerWidth, window.innerHeight),
      ),
    [starCount, window.innerWidth],
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
      for (const star of stars) {
        star.opacity += star.twinkleSpeed;
        if (star.opacity > 1 || star.opacity < 0) {
          star.twinkleSpeed *= -1;
        }

        star.x += Math.cos(star.direction) * star.speed;
        star.y += Math.sin(star.direction) * star.speed;

        if (star.y > height) {
          star.y = 0;
          star.x = Math.random() * width;
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
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
export default StarCanvas;
