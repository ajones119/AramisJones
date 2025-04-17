import { useEffect, useMemo, useRef } from "react";

type Star = {
  x: number;
  y: number;
  radius: number;
  speed: number;
  opacity: number;
  trail: number;
};

const createDrop = (width: number, height: number): Star => ({
  x: Math.random() * width,
  y: Math.random() * height,
  radius: Math.random() * 1.5 + 0.5,
  speed: 5,
  opacity: Math.random() * 0.5 + 0.3,
  trail: Math.random() * 15 + 5,
});

type RainCanvasProps = {
  className?: string;
  dropCount?: number;
};

export const RainCanvas = ({
  dropCount = 300,
  className = "",
}: RainCanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const drops = useMemo(
    () =>
      Array.from({ length: dropCount }, () =>
        createDrop(window.innerWidth, window.innerHeight),
      ),
    [dropCount, window.innerWidth],
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
      for (const drop of drops) {
        drop.x += Math.cos(80) * drop.speed;
        drop.y -= Math.sin(80) * drop.speed;

        if (drop.y > height) {
          drop.y = 0;
          drop.x = Math.random() * width;
        }

        ctx.beginPath();
        ctx.arc(drop.x, drop.y, drop.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${drop.opacity})`;
        ctx.shadowBlur = 5;
        ctx.shadowColor = "rgba(255, 255, 255, 0.5)";
        ctx.fill();

        //draw trail
        ctx.beginPath();
        ctx.moveTo(drop.x, drop.y);
        ctx.lineTo(drop.x, drop.y + drop.trail);
        ctx.strokeStyle = `rgba(255, 255, 255, ${drop.opacity})`;
        ctx.lineWidth = drop.radius;
        ctx.stroke();
        ctx.closePath();
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
export default RainCanvas;
