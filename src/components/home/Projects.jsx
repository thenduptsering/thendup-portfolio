import { useEffect, useRef, useState } from 'react';

import navigateAnchor from '@/helpers/navigateAnchor';
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
      <h2 className="Home__section-heading">projects</h2>
      
      <div className="Home__section-info">
        <div className="Home__section-info-main">
          <div className="Home__section-info-projects">
            {projects.map((project) => {
                return (
                  <div
                    role="button"
                    onClick={() => {
                      if (project.url == null) return;

                      navigateAnchor(project.url);
                    }}
                    key={project.key}
                    className={`Project ${project.url != null ? 'Project--clickable' : ''} ${project.key === 'inProgress' ? 'Project--in-progress' : ''}`}
                  >
                    <div className="Project__header">


                      <div className="Project__header-icons">
                        {project.github != null && (
                          <a
                            onClick={(e) => e.stopPropagation()}
                            target="blank"
                            rel="noopener noreferrer"
                            href={project.github}
                            className="Project__header-icon Project__header-icon--github"
                          >
                            <i className="fa-brands fa-github"></i>
                          </a>
                        )}

                        {project.url != null && (
                          <a
                            onClick={(e) => e.stopPropagation()}
                            target="blank"
                            rel="noopener noreferrer"
                            href={project.url}
                            className="Project__header-icon Project__header-icon--url"
                          >
                            <i className="fa-solid fa-up-right-from-square"></i>
                          </a>
                        )}
                      </div>
                    </div>

                    <div className="Project__body">
                      <h3 className="Project__title">
                        {project.label}
                      </h3>

                      <p className="Project__details">
                        {project.description}
                      </p>
                    </div>

                    <div className="Project__footer">
                      <div className="Project__tech-pills">
                        {project.tools.map((tool) => {
                          return (
                            <div key={`${project.key}-${tool}`} className="Project__tech-pill">{tool}</div>
                          )
                        })}
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