import { useEffect, useState } from "react";

const useScroll = () => {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [bodyOffset, setBodyOffset] = useState(document.body.getBoundingClientRect());
  const [scrollY, setScrollY] = useState(bodyOffset.top);
  const [scrollX, setScrollX] = useState(bodyOffset.left);
  const [scrollDir, setScrollDir] = useState();

  const handleScroll = () => {
    const clientRect = document.body.getBoundingClientRect();
    setBodyOffset(clientRect);
    setScrollY(-clientRect.top);
    setScrollX(clientRect.left);
    setScrollDir(lastScrollTop > -clientRect.top ? "up" : "down");
    setLastScrollTop(-clientRect.top);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return { scrollY, scrollX, scrollDir };
}

export default useScroll;