import { useEffect, useRef, useState } from 'react';

import useIsOnScreen from '@/hooks/useIsOnScreen';

import projects from '@/constants/projects.json';

export default function Projects () {
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
    <section ref={ref} id="projects" className={`Home__section Home__section--projects ${!animated ? 'Home__section--standby' : ''} ${animate ? 'Home__section--animate' : ''}`}>
      <h2 className="Home__section-heading">some things i have worked on</h2>
      
      <div className="Home__section-info">
        <div className="Home__section-info-main">
          <div className="Home__section-info-projects">
            {projects.map((project) => {
                return (
                  <div key={project.key} className="Project">
                    <div className="Project__icon">
                      <i className="fa-solid fa-graduation-cap" />
                    </div>

                    <h3 className="Project__title">
                      {project.label}
                    </h3>

                    <p className="Project__details">
                      {project.description}
                    </p>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
}