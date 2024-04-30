import Tooltip from './Tooltip';

import { millisecondsYear } from '../constants/constants';
import jobs from '../constants/jobs.json';
import skills from '../constants/skills.json';

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

          <p className="Home__section-text-1">
            I am a senior front-end react developer based in Toronto, Canada
          </p>

          <div className="Home__section-buttons">
            <button className="Home__section-button Button Button--default" onClick={downloadResume}>Download resume</button>
          </div>
        </div>
      </section>

      <section id="about" className="Home__section Home__section--about">
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
                Hello! ✌️
              </p>
              <p className="Home__section-text-para">
                My name is Thendup and I&apos;m a senior front-end software engineer with over 8 years of hands-on experience. My interest in web development started back in 2013 when I took a Computer Science course in university and enjoyed it so much that I ended up switching majors – best decision ever! I&apos;ve had the pleasure of working with companies big and small during my co-op terms, and eventually joined <a className="Home__section-text-link" href="https://www.thinkdataworks.com" target="blank">ThinkData Works</a> full time after graduation. 
              </p>
              <p className="Home__section-text-para">
                Over the years, I have led and mentored a team of 9 talented engineers, successfully spearheaded dozens of front-end projects for the company&apos;s flagship enterprise software, as well as excelled in triaging and resolving hundreds of production-level issues. One of my most successful projects at ThinkData Works involved migrating our entire front-end framework from Angular to React w/TypeScipt which revitalized our team&apos;s ability and efficiency in building subsequent front-end features.
              </p>
              <p className="Home__section-text-para">
                I am currently on the lookout for my next adventure, eager to bring my skills and passion to a new team.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="Home__section Home__section--experience">
        <h2 className="Home__section-heading">work experience</h2>
        
        <div className="Home__section-info">
          <div className="Home__section-info-main">
            <div className="Home__section-info-jobs">
              {jobs.map((job) => {
                return (
                  <div key={job.period} className="Job">
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

      <section id="skills" className="Home__section Home__section--skills">
        <h2 className="Home__section-heading">skills</h2>
        
        <div className="Home__section-info">
          <div className="Home__section-info-main">
            <div className="Home__section-info-skills">
              {skills.map((skill) => {
                return (
                  <div key={skill.label} className="Skill">
                    <div className="Skill__icon">
                      <img className="Skill__icon-pic" src={skill.icon} alt={`${skill.label} icon`} />
                    </div>

                    <div className="Skill__label">
                      {skill.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="Home__section Home__section--projects">
        <h2 className="Home__section-heading">some things i have worked on</h2>
        
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