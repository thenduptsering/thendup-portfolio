import anime from "animejs";
import { useMemo, useState } from "react";
import { useResizer } from "../hooks/useResizer";

export default function Tiles () {
  const [toggled, setToggled] = useState(false);

  const { windowWidth, windowHeight } = useResizer();

  const [cols, rows] = useMemo(() => {
    return [Math.floor(windowWidth / 50), Math.floor(windowHeight / 50)];
  }, [windowWidth, windowHeight])

  const style = useMemo(() => {
    return { '--columns': cols, '--rows': rows };
  }, [cols, rows])

  const handleOnClick = (idx) => {
    setToggled(!toggled);

    anime({
      targets: ".Tile",
      opacity: toggled ? 1 : 0,
      delay: anime.stagger(50, {
        grid: [cols, rows],
        from: idx,
      })
    })
  }

  return (
    <div className="Tiles" style={style}>
      {
        Array.from(Array(cols * rows)).map((n, i) => {
          return <div key={`tile_${i}`} className="Tile" onClick={() => handleOnClick(i)}></div>
        })
      }
    </div>
  );
}