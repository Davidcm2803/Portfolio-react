import { useEffect, useState } from "react";
import { Laptop, Monitor, Server, Code, Cpu } from "lucide-react";

// iconos tecnológicos
const icons = [Laptop, Monitor, Server, Code, Cpu];

export const StarBackground = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    generateStars();

    const handleResize = () => {
      generateStars();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generateStars = () => {
  const area = window.innerWidth * window.innerHeight;
  const numberOfStars = Math.floor(area / 45000);

  const newStars = [];

  for (let i = 0; i < numberOfStars; i++) {
    const Icon = icons[Math.floor(Math.random() * icons.length)];

    const isSmall = Math.random() > 0.35;

    newStars.push({
      id: i,
      Icon,
      size: isSmall
        ? Math.random() * 12 + 14
        : Math.random() * 26 + 28,
      x: Math.random() * 100,
      y: Math.random() * 100,
      opacity: isSmall
        ? Math.random() * 0.18 + 0.08
        : Math.random() * 0.12 + 0.04,
      animationDuration: isSmall
        ? Math.random() * 6 + 3
        : Math.random() * 8 + 5,
    });
  }

  setStars(newStars);
};


  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <star.Icon
          key={star.id}
          className="absolute text-foreground animate-float"
          style={{
            width: star.size,
            height: star.size,
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s",
          }}
        />
      ))}
    </div>
  );
};
