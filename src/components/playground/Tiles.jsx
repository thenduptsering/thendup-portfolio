import anime from "animejs";
import { useMemo } from "react";
import { useResizer } from "../../hooks/useResizer";

const colors = [
  '#001219',
  '#005F73',
  '#0A9396',
  '#94D2BD',
  '#E9D8A6',
  '#EE9B00',
  '#CA6702',
  '#BB3E03',
  '#AE2012',
  '#9B2226',
  '#F94144',
  '#F3722C',
  '#F8961E',
  '#F9844A',
  '#F9C74F',
  '#90BE6D',
  '#43AA8B',
  '#4D908E',
  '#577590',
  '#277DA1',
];

export default function Tiles () {
  const { windowWidth, windowHeight } = useResizer();

  const [cols, rows] = useMemo(() => {
    return [Math.floor(windowWidth / 50), Math.floor(windowHeight / 50)];
  }, [windowWidth, windowHeight])

  const style = useMemo(() => {
    return { '--columns': cols, '--rows': rows };
  }, [cols, rows])

  const handleOnClick = (idx) => {
    anime({
      targets: ".Tile",
      backgroundColor: colors[Math.floor(Math.random() * colors.length)],
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