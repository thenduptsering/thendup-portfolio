import { useEffect, useState } from "react";

export const useResizer = () => {
  const [windowWidth, setWindowWidth] = useState(document.body.clientWidth);
  const [windowHeight, setWindowHeight] = useState(document.body.clientHeight);

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