import anime from "animejs";
import { useNavigate } from 'react-router-dom';

import { useEffect, useMemo, useState } from "react";
import { useResizer } from "../hooks/useResizer";

import imageUrls from '../constants/images.json';
import quotes from '../constants/quotes.json';

import mod from '../helpers/mod';
import toggleFullScreen from '../helpers/toggleFullScreen';
import useThrottle from '../helpers/useThrottle';

export default function QuoteTiles () {
  const navigate = useNavigate();
  const [tilesToggled, setTilesToggled] = useState(false);
  const [backgroundToggled, setBackgroundToggled] = useState(true);
  const [slowLoad, setSlowLoad] = useState(false);
  const [hideControls, setHideControls] = useState(false);
  const [fade, setFade] = useState(false);
  const [quoteIdx, setQuoteIdx] = useState(Math.floor(Math.random() * quotes.length));
  const [imageIdx, setImageIdx] = useState(Math.floor(Math.random() * imageUrls.length));
  const [imagePosition, setImagePosition] = useState({ x: 50, y: 50 });

  const { windowWidth, windowHeight } = useResizer();

  const currentQuote = useMemo(() => quotes[quoteIdx], [quoteIdx])

  const [cols, rows] = useMemo(() => {
    return [Math.floor(windowWidth / 30), Math.floor(windowHeight / 30)];
  }, [windowWidth, windowHeight])

  const style = useMemo(() => {
    return { '--columns': cols, '--rows': rows };
  }, [cols, rows])

  const handleQuoteNext = useThrottle(() => {
    setFade(true);

    setTimeout(() => {
      setFade(false);
      setQuoteIdx((prev) => mod((prev + 1), quotes.length));
      setImageIdx((prev) => mod((prev + 1), imageUrls.length));
    }, 600);
  }, 1000, false);

  const handleQuotePrevious = useThrottle(() => {
    setFade(true);

    setTimeout(() => {
      setFade(false);
      setQuoteIdx((prev) => mod((prev - 1), quotes.length));
      setImageIdx((prev) => mod((prev - 1), imageUrls.length));
    }, 600);
  }, 1000, false);

  const toggleControls = () => {
    setHideControls((prev) => !prev);
  }

  const toggleBackground = () => {
    setBackgroundToggled((prev) => !prev);
  }

  const handleOnClick = (idx) => {
    setTilesToggled((prev) => !prev);

    if (!tilesToggled) {
      setSlowLoad(true);
      setQuoteIdx((prev) => (prev + 1) % quotes.length);
      setTimeout(() => {
        setSlowLoad(false)
      }, 2000);
    } else {
      setHideControls(false);
    }

    anime({
      targets: ".Tile",
      opacity: tilesToggled ? 1 : 0,
      delay: anime.stagger(25, {
        grid: [cols, rows],
        from: idx,
      })
    })
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Backspace') {
      navigate("/");
    } else if (e.key === 'ArrowLeft') {
      handleQuotePrevious();
    } else if (e.key === 'ArrowRight') {
      handleQuoteNext();
    } else if (e.key === 'b') {
      toggleBackground();
    } else if (e.key === 'f') {
      toggleFullScreen();
    } else if (e.key === 'h') {
      toggleControls();
    }
  };

  const handleMouseMove = (e) => {
    const imageX = Math.floor(((e.clientX / windowWidth) - 0.5) * 40);
    const imageY = Math.floor(((e.clientY / windowHeight) - 0.5) * 40);

    setImagePosition({
      x: 50 + imageX,
      y: 50 + imageY
    })
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <div className="Tiles" style={style}>
      <div className="Tiles__background" style={{
        opacity: backgroundToggled ? 0 : 1
      }}>
        {imageUrls.map((url, idx) => {
          return (
            <div key={url} className="Tiles__background-image" style={{
              backgroundImage: `url(${imageUrls[idx]})`,
              opacity: idx === imageIdx ? 1 : 0,
              backgroundPosition: `${imagePosition.x}% ${imagePosition.y}%`
            }}></div>
          );
        })}

        <div className="Tiles__background-overlay" />
      </div>

      <div className={`Tiles__main ${tilesToggled ? 'Tiles__main--toggled' : ''} ${backgroundToggled ? 'Tiles__main--gradient' : ''}`}>
        {
          Array.from(Array(cols * rows)).map((n, i) => {
            return <div key={`tile_${i}`} className="Tile" onClick={() => handleOnClick(i)}></div>
          })
        }
      </div>

      <div className={`Tiles__body ${tilesToggled ? 'Tiles__body--show' : ''}`}>
        <div className={`Tiles__body-quote ${fade ? 'Tiles__body-quote--fade' : ''}`}>
          <div className="Tiles__body-quote-text">
            &quot;{currentQuote.quote}&quot;
          </div>

          <div className="Tiles__body-quote-author">
            - {currentQuote.author}
          </div>
        </div>
      </div>

      <div className={`Tiles__footer ${tilesToggled && !hideControls ? 'Tiles__footer--show' : ''} ${slowLoad ? 'Tiles__footer--slow-load' : ''}`}>
        <div
          tabIndex="0"
          role="button"
          className="Key Key--long Tiles__key-sc"
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') navigate("/")
          }}
          onClick={() => navigate("/")}
        >
          <div className="Key__icon Tiles__key-sc-icon"><i className="fa-solid fa-delete-left"></i></div>
          
          <span className="Key__info Tiles__key-sc-label">go&nbsp;home</span>
        </div>

        <div
          tabIndex="0"
          role="button"
          className="Key Tiles__key-sc"
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') handleQuotePrevious()
          }}
          onClick={() => handleQuotePrevious()}
        >
          <div className="Key__icon Tiles__key-sc-icon"><i className="fa-solid fa-caret-left" /></div>
          
          <span className="Key__info Tiles__key-sc-label">previous</span>
        </div>

        <div
          tabIndex="0"
          role="button"
          className="Key Tiles__key-sc"
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') handleQuoteNext()
          }}
          onClick={() => handleQuoteNext()}
        >
          <div className="Key__icon Tiles__key-sc-icon"><i className="fa-solid fa-caret-right" /></div>
          
          <span className="Key__info Tiles__key-sc-label">next</span>
        </div>

        <div
          tabIndex="0"
          role="button"
          className="Key Tiles__key-sc"
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') toggleBackground()
          }}
          onClick={() => toggleBackground()}
        >
          <div className="Key__icon Tiles__key-sc-icon"><i className="fa-solid fa-b"></i></div>
          
          <span className="Key__info Tiles__key-sc-label">background</span>
        </div>

        <div
          tabIndex="0"
          role="button"
          className="Key Tiles__key-sc"
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') toggleFullScreen()
          }}
          onClick={() => toggleFullScreen()}
        >
          <div className="Key__icon Tiles__key-sc-icon"><i className="fa-solid fa-f"></i></div>
          
          <span className="Key__info Tiles__key-sc-label">fullscreen</span>
        </div>

        <div
          tabIndex="0"
          role="button"
          className="Key Tiles__key-sc"
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') toggleControls()
          }}
          onClick={() => toggleControls()}
        >
          <div className="Key__icon Tiles__key-sc-icon"><i className="fa-solid fa-h"></i></div>
          
          <span className="Key__info Tiles__key-sc-label">hide</span>
        </div>
      </div>
    </div>
  );
}