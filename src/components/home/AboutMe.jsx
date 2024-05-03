import { useEffect, useRef, useState } from 'react';

import useIsOnScreen from '@/hooks/useIsOnScreen';

import { DATE_STARTED_WORKING, millisecondsYear } from '@/constants/constants';

const now = new Date();
const experienceStart = new Date(DATE_STARTED_WORKING);
const yearsSince = Math.floor((now.getTime() - experienceStart.getTime()) / millisecondsYear);

export default function AboutMe () {
  const ref = useRef(null);
  const [animate, setAnimate] = useState(false);
  const [animated, setAnimated] = useState(false);
  const isVisible = useIsOnScreen({ ref: ref, threshold: 0.3 });

  useEffect(() => {
    if (isVisible && !animated) {
      setAnimate(true);

      setTimeout(() => {
        setAnimate(false);
        setAnimated(true);  
      }, 2000);
    }
  }, [isVisible])

  return (
    <section ref={ref} id="about" className={`Home__section Home__section--about ${!animated ? 'Home__section--standby' : ''} ${animate ? 'Home__section--animate' : ''}`}>
      <h2 className="Home__section-heading">about me</h2>
      
      <div className="Home__section-info">
        <div className="Home__section-info-left">
          <div className="Home__section-info-headshot">
            <img className="Home__section-info-headshot-pic" src="/headshot.jpg" alt="Thendup headshot" />
          </div>
        </div>

        <div className="Home__section-info-right">
          <div className="Home__section-info-text">
            <p className="Home__section-text-para">
              Hello! 🤘
            </p>
            <p className="Home__section-text-para">
              My name is Thendup and I&apos;m a senior front-end software engineer with over {yearsSince} years of hands-on experience. My interest in web development started back in 2013 when I took a Computer Science course in university and enjoyed it so much that I ended up switching majors – best decision ever! I&apos;ve had the pleasure of working with companies big and small during my co-op terms, and eventually joined <a className="Home__section-text-link" href="https://www.thinkdataworks.com" target="blank">ThinkData Works</a> full time after graduation. 
            </p>
            <p className="Home__section-text-para">
              Over the years, I have led and mentored teams of varying sizes, successfully spearheaded dozens of front-end projects for flagship enterprise software at the companies I&apos;ve worked with, as well as excelled in triaging and resolving hundreds of production-level issues.
            </p>
            <p className="Home__section-text-para">
              I am currently on the lookout for my next adventure, eager to bring my skills and passion to a new team.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}