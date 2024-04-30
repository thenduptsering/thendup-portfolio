import Tooltip from './Tooltip';

import { millisecondsYear } from '../constants/constants';

const RESUME_URL = '/_thenduptsering_resume.pdf';
const DATE_STARTED_WORKING = '06/01/2015';

export default function Home () {
  const downloadResume = () => {
    const anchor = document.createElement('a')
    anchor.href = RESUME_URL
    anchor.download = RESUME_URL.split('/').pop()
    document.body.appendChild(anchor)
    anchor.click()
    document.body.removeChild(anchor)
  }

  const now = new Date();
  const experienceStart = new Date(DATE_STARTED_WORKING);

  const yearsSince = Math.floor((now.getTime() - experienceStart.getTime()) / millisecondsYear);

  return (
    <div className="Home">
      <section id="hero" className="Home__section Home__section--hero">
        <div className="Home__section-info-main">
          <p className="Home__section-text-2">Hey, my name is</p>

          <h1 className="Home__section-text-main">Thendup Tsering.</h1>

          <p className="Home__section-text-1">Senior Front-End Software Engineer</p>

          <p className="Home__section-text-3">
            I enjoy crafting pixel-perfect and performant front-end products. One line of code at a time.
          </p>

          <div className="Home__section-buttons">
            <button className="Home__section-button Button Button--primary" onClick={downloadResume}>My resume</button>

            <button className="Home__section-button Button Button--secondary">Contact me</button>
          </div>
        </div>
      </section>

      <section id="about" className="Home__section Home__section--about">
        <h1 className="Home__section-heading">About me</h1>
        
        <div className="Home__section-info">
          <div className="Home__section-info-left">
            <img className="Home__section-info-pic" src="/headshot.jpg" alt="Thendup headshot" />
          </div>

          <div className="Home__section-info-right">
            {/* <div className="Home__section-info-box-container">
              <div className="Home__section-info-box">
                <div className="Home__section-info-box-icon">
                  <i className="fa-solid fa-medal" />
                </div>

                <h3 className="Home__section-info-box-title">
                  Experience
                </h3>

                <p className="Home__section-info-box-details">
                  {yearsSince}+ years<br />Front-end development
                </p>
              </div>

              <div className="Home__section-info-box">
                <div className="Home__section-info-box-icon">
                  <i className="fa-solid fa-graduation-cap" />
                </div>

                <h3 className="Home__section-info-box-title">
                  Education
                </h3>

                <p className="Home__section-info-box-details">
                  Bachelors of Computer Science
                  <br />
                  University of Waterloo 2017
                </p>
              </div>
            </div> */}

            <div className="Home__section-info-text">
              <p className="Home__section-text-para">
                Hello! 👋
              </p>
              <p className="Home__section-text-para">
                My name is Thendup and I&apos;m a Senior Front-End Software Engineer. My interest in web development started back in 2013 when I took a Computer Science course in university and enjoyed it so much that I ended up switching into it from a finance major – best decision ever! I&apos;ve had the pleasure of working with companies big and small during my co-op terms, and eventually joined <a className="Home__section-text-link" href="https://www.thinkdataworks.com" target="blank">ThinkData Works</a> full time after graduation, crafting awesome UIs and pushing the boundaries of innovation.
              </p>
              <p className="Home__section-text-para">
                Now, I&apos;m on the lookout for my next adventure, eager to bring my skills and passion to a new team. Let&apos;s build something amazing together!
              </p>
              <p className="Home__section-text-para">
                
              </p>

            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="Home__section Home__section--skills">
        <h1 className="Home__section-heading">Skills</h1>
        
        <div className="Home__section-info">
          <div className="Home__section-info-right">
            <div className="Home__section-info-box-container">
              <div className="Home__section-info-box">
                <div className="Home__section-info-box-icon">
                  <i className="fa-solid fa-medal" />
                </div>

                <h3 className="Home__section-info-box-title">
                  Experience
                </h3>

                <p className="Home__section-info-box-details">
                  {yearsSince}+ years<br />Front-end development
                </p>
              </div>

              <div className="Home__section-info-box">
                <div className="Home__section-info-box-icon">
                  <i className="fa-solid fa-graduation-cap" />
                </div>

                <h3 className="Home__section-info-box-title">
                  Education
                </h3>

                <p className="Home__section-info-box-details">
                  Bachelors of Computer Science
                  <br />
                  University of Waterloo 2017
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="Home__section Home__section--projects">
        <h1 className="Home__section-heading">Projects</h1>
        
        <div className="Home__section-info">
          <div className="Home__section-info-right">
            <div className="Home__section-info-box-container">
              <div className="Home__section-info-box">
                <div className="Home__section-info-box-icon">
                  <i className="fa-solid fa-medal" />
                </div>

                <h3 className="Home__section-info-box-title">
                  Experience
                </h3>

                <p className="Home__section-info-box-details">
                  {yearsSince}+ years<br />Front-end development
                </p>
              </div>

              <div className="Home__section-info-box">
                <div className="Home__section-info-box-icon">
                  <i className="fa-solid fa-graduation-cap" />
                </div>

                <h3 className="Home__section-info-box-title">
                  Education
                </h3>

                <p className="Home__section-info-box-details">
                  Bachelors of Computer Science
                  <br />
                  University of Waterloo 2017
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="Home__section Home__section--contact">
        <h1 className="Home__section-heading">Contact me</h1>
        
        <div className="Home__section-info">
          <div className="Home__section-info-right">
            <div className="Home__section-info-box-container">
              <div className="Home__section-info-box">
                <div className="Home__section-info-box-icon">
                  <i className="fa-solid fa-medal" />
                </div>

                <h3 className="Home__section-info-box-title">
                  Experience
                </h3>

                <p className="Home__section-info-box-details">
                  {yearsSince}+ years<br />Front-end development
                </p>
              </div>

              <div className="Home__section-info-box">
                <div className="Home__section-info-box-icon">
                  <i className="fa-solid fa-graduation-cap" />
                </div>

                <h3 className="Home__section-info-box-title">
                  Education
                </h3>

                <p className="Home__section-info-box-details">
                  Bachelors of Computer Science
                  <br />
                  University of Waterloo 2017
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

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
    </div>
  );
}