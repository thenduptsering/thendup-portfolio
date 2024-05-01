import { useEffect, useRef, useState } from 'react';

import useIsOnScreen from '../../hooks/useIsOnScreen';

export default function ContactMe () {
  const ref = useRef(null);
  const [animate, setAnimate] = useState(false);
  const [animated, setAnimated] = useState(false);
  const isVisible = useIsOnScreen({ ref: ref });

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
    <section ref={ref} id="contact" className={`Home__section Home__section--contact ${!animated ? 'Home__section--standby' : ''} ${animate ? 'Home__section--animate' : ''}`}>
      <h2 className="Home__section-heading">get in touch</h2>
      
      <div className="Home__section-info">
        <div className="Home__section-info-main">
          <p className="Home__section-text-para">
            I&apos;m on the lookout for my next adventure, eager to bring my skills and passion to a new team. Whether it&apos;s about a potential job opportunity, shared interests or just a friendly chat, let&apos;s connect!!
          </p>

          <div className="Home__section-buttons">
            <a className="Home__section-button Button Button--link Button--default Button--wiggle" href='mailto:thendupcodes@gmail.com?subject=Hello&body=I would like to discuss...'>Say hi! <span className="Button__emoji Button__emoji--wiggle">👋</span></a>
          </div>
        </div>
      </div>
    </section>
  );
}