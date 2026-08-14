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
    let animationFrame = 0;
    let currentScroll = window.scrollY;
    let targetScroll = window.scrollY;

    const handleScroll = () => {
      targetScroll = window.scrollY;
    };

    const animate = () => {
      currentScroll += (targetScroll - currentScroll) * 0.08;

      const elements =
        containerRef.current?.querySelectorAll<HTMLElement>(
          ".background-shape"
        );

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

      animationFrame = requestAnimationFrame(animate);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    animationFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrame);
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