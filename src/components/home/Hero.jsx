import { useRef, useState } from 'react';

import downloadResume from '@/helpers/downloadResume';

const mainHero = 'THENDUP TSERING';
const alphanums = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

export default function Hero () {
  const [heroName, setHeroName] = useState(mainHero);
  const [isDancing, setIsDancing] = useState(false);

  const danceInterval = useRef(null);

  const startDancing = () => {
    if (isDancing) return;
    
    if (danceInterval.current) clearInterval(danceInterval.current);
    setIsDancing(true);

    danceInterval.current = setInterval(() => {
      const newHero = mainHero.split('').map(() => {
        return alphanums[Math.floor(Math.random() * alphanums.length)];
    }).join('');

      setHeroName(newHero);
    }, 25);
  }

  const stopDancing = () => {
    if (!isDancing) return;

    if (danceInterval.current) clearInterval(danceInterval.current);
    let danceMoves = 0;

    danceInterval.current = setInterval(() => {
      const newHero = mainHero.split('').map((l, i) => {
        if (i < danceMoves) return l;

        return alphanums[Math.floor(Math.random() * alphanums.length)];
    }).join('');

      if (danceMoves > mainHero.length) clearInterval(danceInterval.current);

      setHeroName(newHero);
      danceMoves += 1 / 5;
    }, 25);

    setIsDancing(false);
  }

  return (
    <section id="hero" className="Home__section Home__section--hero">
      <div className="Home__section-info-main">
        <p className="Home__section-line1" style={{animationDelay: '0ms'}}>Hello, my name is</p>

        <h1 className="Home__section-line2" style={{animationDelay: '200ms'}} onMouseEnter={startDancing} onMouseLeave={stopDancing}>{heroName}</h1>

        <p className="Home__section-line3" style={{animationDelay: '400ms'}}>
          I am a senior front-end react developer based in Toronto, Canada
        </p>

        <div className="Home__section-buttons Home__section-line4" style={{animationDelay: '600ms'}}>
          <button className="Home__section-button Button Button--default" onClick={downloadResume}>Download resume</button>
        </div>
      </div>
    </section>
  );
}