import { useEffect, useState } from "react";

export const useResizer = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    }

    window.addEventListener('resize', handleWindowResize);

    return (() => {
      window.removeEventListener('resize', handleWindowResize);
    })
  }, [])

  return { windowWidth, windowHeight };
}