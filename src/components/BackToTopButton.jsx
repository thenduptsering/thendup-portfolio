import { useEffect, useRef, useState } from 'react';

import useScroll from "@/hooks/useScroll";

const cRadius = 22;
const cDimension = 50;
const cCenter = cDimension / 2;

export default function BackToTopButton () {
  const circleRef = useRef(null);
  const rect = document.body?.getBoundingClientRect();
  const maxScrollY = rect != null ? Math.floor(rect.height - window.innerHeight) : null;

  const [showButton, setShowButton] = useState(false);
  const { scrollY } = useScroll();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function setProgress(percent) {
    const circle = circleRef.current;
    const circumference = 2 * Math.PI * cRadius;
    const offset = circumference - (percent / 100) * circumference;
    
    circle.style.strokeDasharray = circumference;
    circle.style.strokeDashoffset = offset;
  }

  useEffect(() => {
    const pct = (scrollY / maxScrollY) * 100;
    setProgress(pct);

    if (scrollY > 500) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  }, [scrollY, maxScrollY])

  return (
    <div role="button" onClick={scrollToTop} className={`Back-To-Top-Button ${showButton ? 'Back-To-Top-Button--active' : ''}`}>
      <div className="Back-To-Top-Button__contents">
        <svg className="Back-To-Top-Button__progress" width={cDimension} height={cDimension}>
          <circle ref={circleRef} className="Back-To-Top-Button__progress-bar" cx={cCenter} cy={cCenter} r={cRadius}></circle>
        </svg>

        <div className="Back-To-Top-Button__arrow">
          <i className="fa-solid fa-arrow-up"></i>
        </div>
      </div>
    </div>
  );
}