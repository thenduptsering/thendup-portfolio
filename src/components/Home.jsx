import Tooltip from './Tooltip';

import AboutMe from './home/AboutMe';
import Experience from './home/Experience';
import Skills from './home/Skills';
// import Projects from './home/Projects';
import ContactMe from './home/ContactMe';

const RESUME_URL = '/_thenduptsering_resume.pdf';

const downloadResume = () => {
  const anchor = document.createElement('a')
  anchor.href = RESUME_URL
  anchor.download = RESUME_URL.split('/').pop()
  document.body.appendChild(anchor)
  anchor.click()
  document.body.removeChild(anchor)
}

export default function Home ({ allLoaded, loadingHero = false }) {
  return (
    <div className={`Home ${allLoaded ? '' : 'Home--standby' } ${loadingHero ? 'Home--loading' : ''}`}>
      <section id="hero" className="Home__section Home__section--hero">
        <div className="Home__section-info-main">
          <p className="Home__section-line1" style={{animationDelay: '0ms'}}>Hello, my name is</p>

          <h1 className="Home__section-line2" style={{animationDelay: '200ms'}}>Thendup Tsering.</h1>

          <p className="Home__section-line3" style={{animationDelay: '400ms'}}>
            I am a senior front-end react developer based in Toronto, Canada
          </p>

          <div className="Home__section-buttons Home__section-line4" style={{animationDelay: '600ms'}}>
            <button className="Home__section-button Button Button--default" onClick={downloadResume}>Download resume</button>
          </div>
        </div>
      </section>

      {allLoaded && (
        <>
          <AboutMe />

          <Experience />

          <Skills />

          {/* <Projects /> */}

          <ContactMe />   

          <div className="Home__footer">
            <div className="Home__section-socials-container">
              <Tooltip direction="top" delay="0" content="LinkedIn profile">
                <a
                  className="Home__section-link Home__section-link--icon"
                  href="https://www.linkedin.com/in/thendup-tsering"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-linkedin" />
                </a>
              </Tooltip>

              <Tooltip direction="top" delay="0" content="Github profile">
                <a
                  className="Home__section-link Home__section-link--icon"
                  href="https://github.com/thenduptsering"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-github" />
                </a>
              </Tooltip>

              <Tooltip direction="top" delay="0" content="Instagram profile">
                <a
                  className="Home__section-link Home__section-link--icon"
                  href="https://www.instagram.com/thendup.tsering"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-instagram" />
                </a>
              </Tooltip>

              <Tooltip direction="top" delay="0" content="Twitter(X) profile">
                <a
                  className="Home__section-link Home__section-link--icon"
                  href="https://twitter.com/thenduptsering"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-x-twitter" />
                </a>
              </Tooltip>
            </div>
          </div>
        </>
      )}
    </div>
  );
}