import { useEffect, useRef } from "react";

const shapes = [
  { type: "square", x: 15, y: 20, size: 42, speed: 0.08, rotate: 25 },
  { type: "circle", x: 80, y: 18, size: 55, speed: -0.06, rotate: 0 },
  { type: "triangle", x: 70, y: 40, size: 48, speed: 0.1, rotate: -20 },
  { type: "square", x: 25, y: 55, size: 35, speed: -0.09, rotate: 45 },
  { type: "circle", x: 85, y: 65, size: 40, speed: 0.07, rotate: 0 },
  { type: "triangle", x: 12, y: 78, size: 50, speed: -0.05, rotate: 30 },
  { type: "square", x: 55, y: 82, size: 45, speed: 0.08, rotate: -35 },
  { type: "circle", x: 42, y: 35, size: 30, speed: -0.07, rotate: 0 },
];

export default function AnimatedBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const elements = containerRef.current?.querySelectorAll<HTMLElement>(
      ".background-shape"
    );
    let animationFrame: number | null = null;
    let currentScroll = window.scrollY;
    let targetScroll = window.scrollY;

    const render = () => {
      elements?.forEach((element, index) => {
        const shape = shapes[index];

        const movement = currentScroll * shape.speed;

        element.style.transform = `
          translate3d(
            0,
            ${movement}px,
            0
          )
          rotate(${shape.rotate + currentScroll * shape.speed * 0.15}deg)
        `;
      });

    };

    const animate = () => {
      animationFrame = null;
      currentScroll += (targetScroll - currentScroll) * 0.08;
      const settled = Math.abs(targetScroll - currentScroll) < 0.1;
      if (settled) currentScroll = targetScroll;
      render();
      if (!settled) animationFrame = requestAnimationFrame(animate);
    };

    const stop = () => {
      if (animationFrame !== null) cancelAnimationFrame(animationFrame);
      animationFrame = null;
    };

    const handleScroll = () => {
      if (motionPreference.matches || document.hidden) return;
      targetScroll = window.scrollY;
      if (animationFrame === null && targetScroll !== currentScroll) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    const syncMotion = () => {
      stop();
      currentScroll = targetScroll = motionPreference.matches ? 0 : window.scrollY;
      render();
    };

    const handleVisibility = () => {
      if (document.hidden) stop();
      else syncMotion();
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    motionPreference.addEventListener("change", syncMotion);
    document.addEventListener("visibilitychange", handleVisibility);
    syncMotion();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      motionPreference.removeEventListener("change", syncMotion);
      document.removeEventListener("visibilitychange", handleVisibility);
      stop();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {shapes.map((shape, index) => (
        <div
          key={index}
          className={`background-shape ${shape.type}`}
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            width: `${shape.size}px`,
            height: `${shape.size}px`,
          }}
        />
      ))}
    </div>
  );
}
