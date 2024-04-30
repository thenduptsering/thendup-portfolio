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
        <div className="Home__section-info-right">
          <p className="Home__section-text-2">Hello, I am</p>

          <h1 className="Home__section-text-main">Thendup Tsering</h1>

          <p className="Home__section-text-1">Senior Front-End Software Engineer</p>

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

            <div className="Home__section-info-text">
              Hello! I am Thendup Tsering....
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
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