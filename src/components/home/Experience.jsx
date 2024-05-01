import { useEffect, useRef, useState } from 'react';

import useIsOnScreen from '../../hooks/useIsOnScreen';

import jobs from '../../constants/jobs.json';

export default function Experience () {
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
    <section ref={ref} id="experience" className={`Home__section Home__section--experience ${!animated ? 'Home__section--standby' : ''} ${animate ? 'Home__section--animate' : ''}`}>
      <h2 className="Home__section-heading">work experience</h2>
      
      <div className="Home__section-info">
        <div className="Home__section-info-main">
          <div className="Home__section-info-jobs">
            {jobs.map((job) => {
              return (
                <div key={job.key} className="Job">
                  <div className="Job__heading">
                    <div className="Job__heading-company">
                      {job.company}
                    </div>

                    <div className="Job__heading-period">
                      {job.period}
                    </div>
                  </div>

                  <div className="Job__body">
                    <div className="Job__body-position">
                      {job.title}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>  
        </div>
      </div>
    </section>
  );
}