import { useEffect, useState } from "react";

const useScroll = () => {
  const [mouseY, setMouseY] = useState(null);
  const [mouseX, setMouseX] = useState(null);

  const handleMouseMove = (e) => {
    setMouseY(e.clientY);
    setMouseX(e.clientX);
  }

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  });

  return { mouseY, mouseX };
}

export default useScroll;